import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-teal-500">
      <div className="text-4xl font-bold text-gray-700">
        <Link to="/">HackList</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
