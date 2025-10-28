import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Navbar() {

  const navigate = useNavigate()
    // Check if a session exists 
  const session = localStorage.getItem('session');

  const handleLogout = () => {
    localStorage.removeItem("session")
    toast.success("Logout successful")
    navigate("/")
  }


  return (
    <nav
      className="md:flex items-center justify-between space-y-5 bg-[#131022]/80 px-5 py-3 fixed z-10 w-full border-b backdrop-blur">
          <h3 className="text-xl font-bold pt-1">
            {session ? (
               <Link to="/user">Dashboard</Link>
            ):(
               <Link to="/">Ticket-App</Link>
            )}
          </h3>
          {session ? (
            <ul className="flex items-center justify-between gap-5 font-semibold">
              <li className="bg-[#5435EE] rounded-lg px-5 py-2">
                  <Link to='ticket-management'>Manage Tickets</Link>
              </li>
              <li className="bg-[#5435EE] rounded-lg px-5 py-2 hover:cursor-pointer">
                  <button onClick={handleLogout} className="hover:cursor-pointer">Logout</button>
              </li>
          </ul>
      ) : (
          <ul className="flex items-center justify-between gap-5 font-semibold">
              <li className="bg-gray-500 rounded-lg px-5 py-2">
                  <Link to='/login'>Login</Link>
              </li>
              <li className="bg-[#5435EE] rounded-lg px-5 py-2">
                  <Link to='/register'>Get Started</Link>
              </li>
          </ul>
          )}
    </nav>
  )
}
