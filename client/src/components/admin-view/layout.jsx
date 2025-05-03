import { useState } from "react";
import logo from "../../assets/rlogo.png";
import { Menu, X, LogOut, User, LayoutDashboard, ListCheckIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/auth-slice/index";

function TeleLeaderLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-72 bg-red-200 text-black transform transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:block`}
      >
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-gray-800 flex items-center space-x-3">
            <img className="w-10" src={logo} alt="Logo" />
            <span>Rasaap</span>
          </h2>
          <button
            className="md:hidden text-gray-800 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Sidebar"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="px-4 mt-6 space-y-6">
        <Link
            to="/admin/dashboard"
            className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-200 hover:scale-105"
          >
            <LayoutDashboard size={22} />
            <span className="text-lg font-semibold">Dashboard</span>
          </Link>
          <Link
            to="/admin/employee"
            className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-200 hover:scale-105"
          >
            <User size={22} />
            <span className="text-lg font-semibold">Employees</span>
          </Link>
          <Link
            to="/admin/packages"
            className="flex items-center space-x-3 text-gray-700 hover:text-pink-500 transition-all duration-200 hover:scale-105"
          >
            <ListCheckIcon size={22} />
            <span className="text-lg font-semibold">Packages</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-2 text-white bg-red-500 px-4 py-2 rounded-xl w-full mt-16 shadow-md hover:bg-red-600 transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Backdrop on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header - Full Width */}
        <header className="bg-white w-full shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-20 border-b-2 border-gray-200">
          <div className="flex items-center space-x-6">
            {/* Menu icon - only on mobile */}
            <button
              className="md:hidden text-gray-800 hover:text-gray-600"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open Sidebar"
            >
              <Menu size={26} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">Tele Sales Leader Dashboard</h1>
          </div>
        </header>

        {/* Main Outlet */}
        <main className="p-6 overflow-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}



export default TeleLeaderLayout