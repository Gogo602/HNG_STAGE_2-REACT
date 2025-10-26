import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index  element={<Home />}/>
        <Route path="login"  element={<Login />}/>
        <Route path="register"  element={<Signup />}/>
      </Route>
    </Routes>
  )
};
