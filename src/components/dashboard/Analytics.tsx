import Card from "./Card";
import { MdKeyboardCommandKey } from "react-icons/md";
import { PiUploadSimpleBold } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function Analytics() {
  return (
    <section className="grid grid-cols-1 gap-6 md:px-20 md:grid-cols-2 lg:grid-cols-3">
        <Card
            title="Total Tickets"
            icon={<MdKeyboardCommandKey size={27} className="text-blue-700"/>}
            total={1250}
            percentage="+20% from Last Month"
        />
        <Card
            title="Open Tickets"
            icon={<PiUploadSimpleBold size={27} className="text-yellow-700"/>}
            total={1250}
            percentage="Currently active"
        />
        <Card
            title="Resolved Tickets"
            icon={<IoMdCheckmarkCircleOutline size={27} className="text-green-700"/>}
            total={1250}
            percentage="80% resolution rate"
        />
    </section>
  )
}
