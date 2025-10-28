import Analytics from "../../components/dashboard/Analytics";
import RecentTicket from "../../components/dashboard/RecentTicket";

export default function Dashboard() {
   
  return (
    <section className='bg-[#131022] flex justify-center min-h-screen w-full px-5'>
        <div className="w-full mt-32 space-y-5 md:mt-25">
            <div className="flex items-center justify-between font-bold w-full">
                <h2 className="text-2xl">Dashboard</h2>
            </div>
            <Analytics />
            <RecentTicket />
        </div>
    </section>
  )
}
