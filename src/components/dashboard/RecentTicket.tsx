import { useEffect, useState } from "react";
import { FaHouse, FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

interface TTicket {
    id: string
    title: string
    description: string
    status: string
    createdAt: Date
    lastUpdated: Date
}

export default function RecentTicket() {
const [tickets, setTickets] = useState<TTicket[]>([]);

    useEffect(() => {
      // Retrieve tickets 
      const allTickets = localStorage.getItem("tickets");
      const parsedTickets = allTickets ? JSON.parse(allTickets) : [];
      setTickets(parsedTickets.slice(0, 6)); 
    }, []);
  
  
    
  const handleDelete = (id: string) => {
    const updatedTickets = tickets.filter(ticket => ticket?.id !== id)
      setTickets(updatedTickets)
      // Update localStorage with the new array
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    }

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Resolved":
        return "text-green-700";
      case "Open":
        return "text-yellow-500";
      case "In Progress":
        return "text-blue-500";
      default:
        return "text-red-700";
    }
  };

    const hasTickets = tickets && tickets.length > 0;

  return (
    <section className="py-5  rounded-md">
      <div className="space-y-7">
        <div className="flex">
          <h2 className="font-semibold">Recent Tickets</h2>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-300">
          <table className="table-auto w-full border-collapse ">
            <thead>
              <tr className="bg-gray-600 text-[14px]">
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  Ticket
                </th>
                <th className="border border-gray-300 text-left px-4 py-2  lg:table-cell">
                  Subject
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden lg:table-cell">
                  Status
                </th>
                <th className="border border-gray-300 text-left px-4 py-2">
                  Last Updated
                </th>
                <th className="border border-gray-300 text-left px-4 py-2 hidden md:table-cell">
                  Action
                </th>
                
              </tr>
            </thead>
            <tbody>
                {hasTickets ? (
                    tickets.map((ticket: TTicket) => (
                        <tr key={ticket.id} className="text-[14px]">
                            <td className="px-4 border border-gray-200 py-2 hidden lg:table-cell font-semibold">
                                #{ticket.id.slice(0,8)}...
                            </td>
                            <td className="px-4 border border-gray-200 py-2  lg:table-cell ">
                                {ticket.title}
                            </td>
                            <td className="px-4 py-2 border border-gray-200  hidden lg:table-cell  gap-2">
                            <span className={` ${getStatusClass(ticket.status || "Open")}`}>
                                {ticket.status || "Open"}
                            </span>
                            </td>
                            
                            <td className="px-4 border border-gray-200 py-2  text-center">
                               {new Date(ticket.lastUpdated).toLocaleDateString()}
                            </td>
                            <td className="px-4 border border-gray-200 py-2 hidden md:table-cell text-center">
                                <div className="flex items-center justify-center gap-6">
                                  <FaPen />
                                  <button
                                    onClick={() => handleDelete(ticket.id)}
                                    className="text-red-500 hover:underline"
                                  >
                                    <MdDelete />
                                  </button>
                                </div>
                            </td>                    
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={5} className="py-10 text-center text-gray-500">
                            <div className="flex flex-col items-center justify-center">
                                <FaHouse size={40} className="text-blue-600 mb-2" />
                                <p>No tickets found.</p>
                            </div>
                        </td>
                    </tr>
                )}
                
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
