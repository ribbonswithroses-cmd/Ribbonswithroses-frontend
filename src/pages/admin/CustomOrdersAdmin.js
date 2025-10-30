// src/pages/admin/CustomOrdersAdmin.jsx
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Filter, Eye, Trash2 } from "lucide-react";

const CustomOrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("/custom-orders");
      setOrders(res.data.reverse());
    } catch (err) {
      console.error("Error fetching custom orders:", err);
    }
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await axios.delete(`/custom-orders/${id}`);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error("Error deleting order:", err);
      alert("Failed to delete order");
    }
  };

  const filteredOrders =
    filter === "all" ? orders : orders.filter((o) => o.type === filter);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">
        Custom Orders Dashboard
      </h1>

      {/* Filter */}
      <div className="flex items-center gap-4 mb-6">
        <Filter className="w-5 h-5 text-gray-500" />
        <select
          className="border rounded-lg px-3 py-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Orders</option>
          <option value="existing">Existing Product Customization</option>
          <option value="upload">Uploaded Design</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl">
        <table className="w-full border-collapse">
          <thead className="bg-pink-100">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((o, i) => (
              <tr
                key={o._id}
                className="border-b hover:bg-pink-50 cursor-pointer"
              >
                <td className="p-3">{i + 1}</td>
                <td className="p-3 capitalize">
                  {o.type === "existing" ? (
                    <span className="text-blue-600 font-medium">Existing</span>
                  ) : (
                    <span className="text-green-600 font-medium">Upload</span>
                  )}
                </td>
                <td className="p-3">{o.name}</td>
                <td className="p-3">
                  <p>{o.phone}</p>
                  <p className="text-sm text-gray-500">{o.email}</p>
                </td>
                <td className="p-3">
                  {o.type === "existing" ? (
                    o.productName || "-"
                  ) : o.uploadImage ? (
                    <img
                      src={o.uploadImage}
                      alt="upload"
                      className="w-12 h-12 object-cover rounded-md border"
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-3 text-gray-600">
                  {new Date(o.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3 flex gap-2 justify-center">
                  <button
                    onClick={() => setSelected(o)}
                    className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600"
                  >
                    <Eye className="inline w-4 h-4 mr-1" /> View
                  </button>
                  <button
                    onClick={() => deleteOrder(o._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    <Trash2 className="inline w-4 h-4 mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl rounded-xl p-6 shadow-lg relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-pink-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
              Order Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><b>Name:</b> {selected.name}</p>
                <p><b>Email:</b> {selected.email}</p>
                <p><b>Phone:</b> {selected.phone}</p>
                <p><b>Type:</b> {selected.type}</p>
                <p><b>Product:</b> {selected.productName || "—"}</p>
                <p><b>Status:</b> {selected.status}</p>
              </div>

              {selected.type === "upload" ? (
                <div>
                  <p><b>Occasion:</b> {selected.occasion || "—"}</p>
                  <p><b>Budget:</b> {selected.budget || "—"}</p>
                  <p><b>Delivery Date:</b> {selected.deliveryDate || "—"}</p>
                </div>
              ) : (
                <div>
                  <p><b>Flowers:</b> {selected.changes?.flowers?.join(", ") || "—"}</p>
                  <p><b>Color Theme:</b> {selected.changes?.colorTheme || "—"}</p>
                  <p><b>Wrapping:</b> {selected.changes?.wrappingSheet || "—"}</p>
                  <p><b>Extras:</b> {selected.changes?.extras?.join(", ") || "—"}</p>
                </div>
              )}
            </div>

            <div className="mt-4">
              <b>Message:</b>
              <p className="border p-2 rounded-lg bg-gray-50 mt-1">
                {selected.message || "—"}
              </p>
            </div>

            {selected.uploadImage && (
              <div className="mt-4">
                <b>Uploaded Image:</b>
                <img
                  src={selected.uploadImage}
                  alt="Uploaded Design"
                  className="w-48 h-48 object-cover mt-2 rounded-lg border"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomOrdersAdmin;
