
export default function Card() {
  return (
    <div className='bg-gray-500 rounded-md'>
        <div className='p-6 space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold'>Total Tickets</h3>
                <p>Icons</p>
            </div>
            <div>
                <p className='font-bold text-2xl'>120</p>
                <p>+20.1% from last Month</p>
            </div>
        </div>
    </div>
  )
}
