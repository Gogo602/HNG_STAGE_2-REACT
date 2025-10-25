import React from "react";
import type { TFeatures } from "../../types";
import { LuFilePlus } from "react-icons/lu";
import { MdOutlineMoreTime } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";


export default function Features() {
  return (
      <section className="flex items-center justify-center bg-[#131022] px-5 py-2">
        <div className="flex flex-col space-y-5 z-2 relative">
            <div className="text-center -mt-15 text-md md:mt-0">
                <h2 className="text-xl font-bold py-5 text-blue-600">Core Features</h2>
                <p>
                    Our platform is designed to provide seamless and efficient tiketing experience. <br className="hidden sm:inline-block"/> Here are some of the key features that make our app stand out.
                </p>
            </div>
            
            <div className="grid grid-cols-1 gap-7 px-2 py-10 z-1 md:px-25 mb-20 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((item: TFeatures) => (
                    <React.Fragment
                        key={item.id}
                    >
                        <div className="bg-[#1F1C2D]/60 rounded-lg p-5 border border-blue-600 ">
                            <div className="flex items-center gap-3 pb-5 font-bold text-2xl">
                                <p>{item.icon}</p>
                                <h2>{item.title}</h2>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            
            <div className="bg-blue-900 absolute w-30 h-40 rounded-full z-0 shadow-3xl blur-3xl -bottom-5 right-5"/>
        </div>
    </section>
  )
}

const features = [
    {
        id: 1,
        icon: <LuFilePlus className="text-blue-600"/>,
        title: "Easy Ticket Creation",
        desc: "Create and design tickets in seconds with our user friendly interface designed for speed and efficiency"
    },
    {
        id: 2,
        icon: <MdOutlineMoreTime className="text-blue-600"/>,
        title: "Real Time Update",
        desc: "Stay informed with live notifications and updates on ticket status, comments and progress"
    },
    {
        id: 3,
        icon: <PiUsersThreeFill className="text-blue-600"/>,
        title: "Seamless Collaboration",
        desc: "Work together with your team to resolve issues quickly and efficiently using shared inboxes and internal notes"
    }
]