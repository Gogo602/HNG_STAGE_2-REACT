import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import UserLayout from "./layout/UserLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import ProtectedRoutes from "./routes/ProtectedRoutes";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index  element={<Home />}/>
        <Route path="login"  element={<Login />}/>
        <Route path="register"  element={<Signup />}/>
      </Route>
      
       {/* Protected routes */}
      <Route path="/user" element={
        <ProtectedRoutes>
          <UserLayout />
        </ProtectedRoutes>
      }>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
};
