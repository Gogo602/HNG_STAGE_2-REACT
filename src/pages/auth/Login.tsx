import { useState } from "react";
import EmailInput from "../../components/inputs/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");

    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];

    const user = users.find(
      (user: { email: string; password: string; }) =>
        user.email === email && user.password === password
    );

    if (user) {
      // Create a secure-looking token for the session
      const sessionToken = crypto.randomUUID();
      
      // Combine the user ID with the token to reference the user
      const loginData = {
        userId: user.id,
        token: sessionToken,
      };

      // Store the session data (including the token) in localStorage
      localStorage.setItem('session', JSON.stringify(loginData));

      console.log("Login successful!", loginData);
      navigate('/user');
    } else {
      setError("Invalid email or password.");
      console.log(error)
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-[#131022] px-5 w-full">
      <div className=" w-full md:w-1/4">
        <div className="text-center my-7 font-semibold">
            <h2 className="text-2xl">
              Login
            </h2>
            <p>Enter your details to access your account</p>
        </div>
        {error && (
          <p className="text-white bg-red-600 w-full text-center py-1">{error}</p>
        )}
        <form onSubmit={handleLogin} className="w-full">
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
          <button type="submit" className="bg-blue-600 rounded-md w-full py-2">Login</button>
        </form>
        <p className="py-4 text-center font-semibold">Dont have any account? <Link to='/register'>Signup</Link></p>
      </div>
    </section>
  )
}
