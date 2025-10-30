import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { toast, Toaster } from "react-hot-toast";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Processing: "bg-blue-100 text-blue-800",
  Shipped: "bg-purple-100 text-purple-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // ✅ Fetch all orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      const res = await axios.get("/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
      setFilteredOrders(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ Search by Order ID
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = orders.filter((order) =>
      order.orderId.toLowerCase().includes(value)
    );
    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  // ✅ Update order status
  const updateStatus = async (id, newStatus) => {
    try {
      setUpdating(true);
      const token = sessionStorage.getItem("token");
      await axios.patch(
        `/orders/${id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Order status updated!");
      fetchOrders();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    } finally {
      setUpdating(false);
    }
  };

  // ✅ Delete order
  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Order deleted successfully!");
      fetchOrders();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete order");
    }
  };
// ✅ Print order
const handlePrint = (order) => {
  const printWindow = window.open("", "_blank");

  // Calculate total from cart
 const subtotal = order.cart.reduce((sum, item) => {
  const itemPrice =
    item.totalPrice ??
    item.basePrice ??
    item.price ??
    0;
  return sum + itemPrice * (item.quantity ?? 1);
}, 0);


  // Include delivery charge if applicable
  const deliveryCharge = order.delivery === "delivery" ? 10 : 0;
  const grandTotal = order.total ?? subtotal + deliveryCharge;

  const itemsHTML = order.cart
    .map(
      (item) =>
        `<tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>$${(
  (item.totalPrice ?? item.basePrice ?? item.price ?? 0) *
  (item.quantity ?? 1)
).toFixed(2)}</td>

        </tr>`
    )
    .join("");

  printWindow.document.write(`
    <html>
      <head>
        <title>Order ${order.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          h2 { text-align: center; color: #444; }
          .totals { margin-top: 15px; text-align: right; }
        </style>
      </head>
      <body>
        <h2>Order Details - ${order.orderId}</h2>

        <p><b>Customer:</b> ${order.form.firstName} ${order.form.lastName}</p>
        <p><b>Email:</b> ${order.userEmail}</p>
        <p><b>Phone:</b> ${order.form.phone}</p>
        <p><b>Address:</b> ${order.form.address1}, ${order.form.city}, ${order.form.state} ${order.form.postalCode}</p>
        <p><b>Delivery:</b> ${order.delivery}</p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>${itemsHTML}</tbody>
        </table>

        <div class="totals">
          <p><b>Subtotal:</b> $${subtotal.toFixed(2)}</p>
          <p><b>Delivery Charge:</b> $${deliveryCharge.toFixed(2)}</p>
          <p><b>Grand Total:</b> <b>$${grandTotal.toFixed(2)}</b></p>
        </div>

        <p><b>Status:</b> ${order.status}</p>
        <p><b>Date:</b> ${new Date(order.createdAt).toLocaleString()}</p>
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.print();
};


  // ✅ Pagination
  const indexOfLast = currentPage * ordersPerPage;
  const indexOfFirst = indexOfLast - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading orders...
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🧾 Admin Orders</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by Order ID..."
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg p-2 w-full max-w-sm"
        />
      </div>

      {/* Orders Table */}
      {filteredOrders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order) => (
                <tr
                  key={order._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-3">{order.orderId}</td>
                  <td className="p-3">
                    {order.form.firstName} {order.form.lastName}
                  </td>
                  <td className="p-3">{order.userEmail}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-center flex flex-wrap justify-center gap-2">
                    {/* Update Status Dropdown */}
                    <select
                      disabled={updating}
                      value={order.status}
                      onChange={(e) =>
                        updateStatus(order._id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-sm"
                    >
                      {[
                        "Pending",
                        "Processing",
                        "Shipped",
                        "Delivered",
                        "Cancelled",
                      ].map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>

                    {/* Print */}
                    <button
                      onClick={() => handlePrint(order)}
                      className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900 text-sm"
                    >
                      Print
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => deleteOrder(order._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
