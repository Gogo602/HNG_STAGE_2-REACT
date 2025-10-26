import { Link } from "react-router-dom";
import Analytics from "../../components/dashboard/Analytics";

export default function Dashboard() {
  return (
    <section className='bg-[#131022] flex  justify-center min-h-screen w-full px-5'>
        <div className="w-full mt-25 space-y-5">
            <div className="flex items-center justify-between font-bold w-full">
                <h2 className="text-2xl">Dashboard</h2>
                <Link to="user/create-ticket" className="bg-blue-500 py-2 px-5 text-white rounded-md">+ Create Ticket</Link>
            </div>
            <Analytics />
        </div>
    </section>
  )
}
