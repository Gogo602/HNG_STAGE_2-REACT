import { FaCamera, FaCode } from "react-icons/fa6";
import { RiAtLine } from "react-icons/ri";


export default function Footer() {
    const today: Date = new Date();
    const year: number = today.getFullYear()

  return (
    <footer className="bg-[#131022] p-6 border-t border-gray-500">
        <div className="md:flex items-center justify-between space-y-5">
                <p>© {year} Ticket-App. All right reserved.</p>
            
            <div className="flex items-center gap-5">
                <RiAtLine />
                <FaCode />
                <FaCamera />
            </div>
        </div>
    </footer>
  )
}
