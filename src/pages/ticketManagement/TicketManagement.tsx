import Analytics from "../../components/dashboard/Analytics";
import Modal from "../../components/dashboard/Modal";
import { useState } from "react";
import CreateTicket from "../../components/dashboard/CreateTicket";
import Tickets from "../../components/ticketManagement/Tickets";

export default function TicketManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    };
    
  return (
    <section className='bg-[#131022] flex justify-center min-h-screen w-full px-5 max-w-[1440] pb-5'>
        <div className="w-full mt-32 space-y-5 md:mt-25">
            <div className="flex items-center justify-between font-semibold w-full">
                <h2 className="text-2xl">Manage Tickets</h2>
                <button
                    onClick={() => toggleModal()}
                    className="bg-blue-600 rounded-md py-2 px-2 text-white hover:cursor-pointer md:px-5"
                >
                    + Create Ticket
                </button>
                <Modal
                    title="Create Ticket"
                    isOpen={isModalOpen}
                    onClose={toggleModal}>
                    <CreateTicket onClose={toggleModal}/>
                </Modal>
            </div>
            <Analytics />
            <div className="space-y-5 mt-10">
                <h3 className="font-bold text-2xl">Available Tickets</h3>
                <Tickets />
            </div>
        </div>
    </section>
  )
}
