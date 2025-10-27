import Analytics from "../../components/dashboard/Analytics";
import RecentTicket from "../../components/dashboard/RecentTicket";
import Modal from "../../components/dashboard/Modal";
import { useState } from "react";
import CreateTicket from "../../components/dashboard/CreateTicket";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    };
    
  return (
    <section className='bg-[#131022] flex justify-center min-h-screen w-full px-5'>
        <div className="w-full mt-32 space-y-5 md:mt-25">
            <div className="flex items-center justify-between font-bold w-full">
                <h2 className="text-2xl">Dashboard</h2>
                <button
                    onClick={() => toggleModal()}
                    className="bg-blue-600 rounded-md py-2 px-5 text-white hover:cursor-pointer"
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
            <RecentTicket />
        </div>
    </section>
  )
}
