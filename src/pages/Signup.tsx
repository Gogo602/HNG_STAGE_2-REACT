import { useState } from "react";
import EmailInput from "../components/inputs/EmailInput";
import PasswordInput from "../components/inputs/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/inputs/TextInput";

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

  const id: string = crypto.randomUUID()
    const data = {
      id,
      name,
      email,
      password
    }
    // Retrieve existing users
    const existingUsers = localStorage.getItem('users');
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    // Add the new user to the users
    users.push(data);

    // Save the updated users 
    localStorage.setItem('users', JSON.stringify(users));

    // console.log("User data stored in localStorage:", data);
    navigate('/login');
  }

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-[#131022] px-5 w-full">
      <div className=" w-full md:w-1/4">
        <div className="text-center mb-5 mt-17 font-semibold">
            <h2 className="text-2xl">
              Register
            </h2>
            <p>Create an account and enjoy seamless Ticketing</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <TextInput
            label="Full Name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <EmailInput
            label="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <PasswordInput
            label="Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <button type="submit" className="bg-blue-600 rounded-md w-full py-2">Signup</button>
        </form>
        <p className="py-4 text-center font-semibold">Already have an account? <Link to='/login'>login</Link></p>
      </div>
    </section>
  )
}
