// src/pages/admin/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white fixed md:relative h-full">
        <AdminSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 md:ml-0 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};
export default AdminLayout;
