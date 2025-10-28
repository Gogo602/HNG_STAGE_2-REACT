import React, { useEffect, useState } from "react";
import { FaHouse, FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import type { TTicket } from "../../types";
import Modal from "../dashboard/Modal";
import EditTicket from "./EditTicket";
import { toast } from "react-toastify";


export default function Tickets() {
    const [tickets, setTickets] = useState<TTicket[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTicket, setEditingTicket] = useState<TTicket | null>(null);


        useEffect(() => {
          // Retrieve tickets 
          const allTickets = localStorage.getItem("tickets");
          const parsedTickets = allTickets ? JSON.parse(allTickets) : [];
          setTickets(parsedTickets.slice(0, 6)); 
        }, []);
    
        const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            setEditingTicket(null); 
        }
    };
      
      const handleEditClick = (ticket: TTicket) => {
        setEditingTicket(ticket);
        setIsModalOpen(true);
    };
        
      const handleDelete = (id: string) => {
        const updatedTickets = tickets.filter(ticket => ticket?.id !== id)
          setTickets(updatedTickets)
          // Update localStorage with the new array
          localStorage.setItem('tickets', JSON.stringify(updatedTickets));
           toast.error("Ticket Deleted");
        }
    
      const getStatusClass = (status: string) => {
        switch (status) {
          case "open":
            return "text-green-700 bg-green-200 px-3 py-1 rounded-lg";
          case "in_progress":
            return "text-yellow-700 bg-yellow-200 px-3 py-1 rounded-lg";
          case "closed":
            return "text-gray-300 bg-gray-200 px-3 py-1 rounded-lg";
          default:
            return "text-red-700 bg-red-200 px-3 py-1 rounded-lg";
        }
      };

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {tickets ?
              (tickets.map((ticket) => (
                  <React.Fragment
                      key={ticket.id}
                  >
                      <div className="bg-[#1F1C2D]/60 rounded-lg p-3 border border-blue-600 ">
                          <div className="flex items-center justify-between gap-3 pb-5 font-bold">
                              <h2>{ticket.title}</h2>
                              <p className="text-sm">
                                  <span className={` ${getStatusClass(ticket.status || "Open")}`}>
                                      {ticket.status || "Open"}
                                  </span>
                              </p>
                          </div>
                          <p>{ticket.description}</p>
                          <div className="flex items-center gap-5 mt-2 font-bold">
                              <button
                                   onClick={() => handleEditClick(ticket)}
                                  className="text-white hover:cursor-pointer flex items-center gap-1"
                              >
                                  <FaPen /> {" "} Edit
                              </button>
                              <button
                                  onClick={() => handleDelete(ticket.id)}
                                  className="text-red-500 hover:cursor-pointer flex items-center gap-1"
                              >
                                  <MdDelete /> {" "} Delete
                              </button>
                          </div>
                      </div>
                  </React.Fragment>
              ))) : (
                    <div className="py-10 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center">
                            <FaHouse size={40} className="text-blue-600 mb-2" />
                            <p>No tickets found.</p>
                        </div>
                    </div>
              )}

                {isModalOpen && editingTicket && (
                    <Modal
                        title="Edit Ticket"
                        isOpen={isModalOpen}
                        onClose={toggleModal}
                    >
                        <EditTicket ticket={editingTicket} onClose={toggleModal} />
                    </Modal>
                )}
    </section>
  )
}


