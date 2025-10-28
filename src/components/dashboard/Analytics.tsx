import Card from "./Card";
import { MdKeyboardCommandKey } from "react-icons/md";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import type { TTicket } from "../../types";


export default function Analytics() {
  const [tickets, setTickets] = useState<TTicket[]>([]);
  
      useEffect(() => {
        // Retrieve tickets 
        const allTickets = localStorage.getItem("tickets");
        const parsedTickets = allTickets ? JSON.parse(allTickets) : [];
        setTickets(parsedTickets.slice(0, 6)); 
      }, []);

  
  const totalTickets = tickets.length || 0

  const openedTicket = tickets.filter(
    (ticket) => ticket.status === "open"
  ).length


  const resolvedTicket = tickets.filter(
    (ticket) => ticket.status === "closed"
  ).length
  
 
  
  return (
    <section className="grid grid-cols-1 gap-6 md:px-20 md:grid-cols-2 lg:grid-cols-3">
        <Card
            title="Total Tickets"
            icon={<MdKeyboardCommandKey size={27} className="text-blue-700"/>}
            total={totalTickets}
            percentage="+1% from Last Month"
        />
        <Card
            title="Open Tickets"
            icon={<PiUploadSimpleBold size={27} className="text-yellow-700"/>}
            total={openedTicket}
            percentage="Currently active"
        />
        <Card
            title="Resolved Tickets"
            icon={<IoMdCheckmarkCircleOutline size={27} className="text-green-700"/>}
            total={resolvedTicket}
            percentage="3% resolution rate"
        />
    </section>
  )
}
