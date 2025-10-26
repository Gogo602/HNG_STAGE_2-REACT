import { Outlet } from "react-router-dom";


export default function UserLayout() {
  return (
    <main className="text-white">
        <Outlet />
    </main>
  )
}
