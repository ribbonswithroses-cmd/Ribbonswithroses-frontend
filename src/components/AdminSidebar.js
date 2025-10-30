import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  LogOut,
  MessageCircle,
   KeyRound,
  Flower2,
  PartyPopper,
  ShoppingCart,
} from "lucide-react"; 
function AdminSidebar() {
  const location = useLocation();

  const links = [
    { path: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { path: "/admin/boxes", label: "Manage Boxes", icon: <Package size={18} /> },
    { path: "/admin/occasion", label: "Occasion Products", icon: <PartyPopper size={18} /> },
    { path: "/admin/messages", label: "Messages Query", icon: <MessageCircle size={18} /> },
     { path: "/admin/keychain", label: "KeyChain", icon: <KeyRound size={18} /> },
      { path: "/admin/bouquet", label: "Bouquets", icon: <Flower2 size={18} /> },
     { path: "/admin/orders", label: "Orders", icon: <ShoppingCart size={18} /> },
     { path: "/admin/custom-orders", label: "Custom-Orders", icon: <ShoppingCart size={18} /> },


  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col fixed top-0 left-0 shadow-lg">
      {/* Logo */}
      <div className="p-5 text-center text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>

      {/* Nav Links */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 p-2 rounded-lg transition ${
                  location.pathname === link.path
                    ? "bg-gray-700"
                    : "hover:bg-gray-800"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => {
         sessionStorage.removeItem("adminToken"); // clear login token
            window.location.href = "/admin/login";
          }}
          className="flex items-center gap-2 p-2 w-full rounded-lg hover:bg-gray-800 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
