import { useEffect, useState } from 'react'
import TextInput from '../inputs/TextInput'
import TextAreaInput from '../inputs/TextAreaInput'
import { toast } from 'react-toastify'
import type { TTicket } from '../../types'


interface TCloseProp{
    onClose: () => void
    ticket: TTicket 
}

export default function EditTicket({ onClose, ticket }: TCloseProp) {
    const [ title, setTitle ] = useState(ticket.title)
    const [description, setDescription] = useState(ticket.description)
    const [status, setStatus] = useState(ticket.status || "open")
    const [ error, setError ] = useState("")


    useEffect(() => {
        setTitle(ticket.title);
        setDescription(ticket.description);
        setStatus(ticket.status || "open");
    }, [ticket]);


    const handleUpdate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    
    if (!title || !description) {
        setError("Title and Description must not be empty");
        return;
    }

    const updatedTicket = {
        ...ticket, 
        title,
        description,
        status,
        lastUpdated: Date.now() 
    };

    const allTickets = localStorage.getItem('tickets');
    const tickets = allTickets ? JSON.parse(allTickets) : [];
    
    // Find the index of the ticket to be updated
    const ticketIndex = tickets.findIndex((t: TTicket) => t.id === updatedTicket.id);

    if (ticketIndex > -1) {
        tickets[ticketIndex] = updatedTicket; 
    }

    localStorage.setItem('tickets', JSON.stringify(tickets));
    toast.success("Ticket Updated Successfully");
    
    onClose();
};
    
  return (
    <div>
        {error && (
            <p className="text-white bg-red-600 w-full text-center py-1">{error}</p>
        )}
        <form onSubmit={handleUpdate}>
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
            <button type='submit' className='text-center w-full py-2 bg-blue-600 rounded-md'>Update Ticket</button>
        </form>
    </div>
  )
}
