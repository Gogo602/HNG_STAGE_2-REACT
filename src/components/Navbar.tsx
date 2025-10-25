import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";


export default function Navbar() {
  return (
    <nav className="md:flex items-center justify-between px-6 py-3 space-y-5">
          <h3 className="text-xl font-bold">Ticket-App</h3>
          <ul className="flex items-center justify-between gap-5 font-semibold">
              <li className="bg-gray-500 rounded-lg px-5 py-1">
                  <Link to='/login'>Login</Link>
              </li>
              <li className="bg-[#5435EE] rounded-lg px-5 py-1">
                  <Link to='/register'>Get Started</Link>
              </li>
              <li>
                  <CiLight size={25}/>
              </li>
          </ul>
    </nav>
  )
}
