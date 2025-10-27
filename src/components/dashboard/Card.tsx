import type { ReactNode } from "react";

interface TCard {
    title: string;
    icon: ReactNode;
    total: number;
    percentage: string;
}


export default function Card({ title, icon, total, percentage}: TCard) {
  return (
    <div className='bg-gray-600 rounded-md'>
        <div className='p-6 space-y-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold'>{title}</h3>
                <p>{icon}</p>
            </div>
            <div>
                <p className='font-bold text-4xl'>{total}</p>
                <p className="text-sm">{percentage}</p>
            </div>
        </div>
    </div>
  )
}
