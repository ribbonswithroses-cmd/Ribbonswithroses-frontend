import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

function Dashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold">Welcome, Admin 👋</h1>
        <p className="mt-2 text-gray-700">This is your dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
