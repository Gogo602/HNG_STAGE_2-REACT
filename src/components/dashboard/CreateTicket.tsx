import { useState } from 'react'
import TextInput from '../inputs/TextInput'
import TextAreaInput from '../inputs/TextAreaInput'
import { toast } from 'react-toastify'


interface TCloseProp{
    onClose: () => void
}
export default function CreateTicket({ onClose }: TCloseProp) {
    const [ title, setTitle ] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [ error, setError ] = useState("")

    const handleCreate = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setError("")
        
        if(!title || !description){
            setError("Title or Description must not be empty")
            return;
        }
        const newTicket = {
            id: crypto.randomUUID(),
            title,
            description,
            status,
            createdAt: Date.now(),
            lastUpdated: Date.now()
        }

        // Retrieve existing tickets 
        const existingTicketsString = localStorage.getItem('tickets');
        const tickets = existingTicketsString ? JSON.parse(existingTicketsString) : [];

        // Add the new ticket 
        tickets.push(newTicket);

        // Save the updated array of tickets 
        localStorage.setItem('tickets', JSON.stringify(tickets));
        toast.success("Ticket Created Successfully")
        console.log("Ticket created and stored in localStorage:", newTicket);

        
        setTitle("");
        setDescription("");
        onClose()

    }
    
  return (
    <div>
        {error && (
            <p className="text-white bg-red-600 w-full text-center py-1">{error}</p>
        )}
        <form onSubmit={handleCreate}>
            <TextInput 
                label="Title"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required={true}
            />
            
            <div className="my-5">
                <label htmlFor="status">Select Status</label>
                <select
                    name="status"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border border-gray-500 rounded-md outline-0 px-3 py-1.5 focus:border-white"
                >
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
              <TextAreaInput
                label="Description"
                name="description"      
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required={true}
            />
            <button type='submit' className='text-center w-full py-2 bg-blue-600 rounded-md'>Create</button>
        </form>
    </div>
  )
}
