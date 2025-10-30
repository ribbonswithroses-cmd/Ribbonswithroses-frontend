import React, { useEffect, useState } from "react";
import axios from "../../api/axios"; // ✅ use your configured axios
import LoginModal from "../../components/LoginModal"; // ✅ import login modal

const MyOrders = ({ user, setUser }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = sessionStorage.getItem("token"); // ✅ match your login storage
        if (!token) {
          setLoginOpen(true); // ✅ open login popup instead of alert
          setLoading(false);
          return;
        }

        const res = await axios.get("/orders/my", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setOrders(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading your orders...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg shadow-inner">
          <p className="text-lg text-gray-600">No orders found yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-xl p-6 shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Order ID:</span>{" "}
                  {order.orderId}
                </p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : order.status === "Cancelled"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status || "Pending"}
                </span>
              </div>

              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Delivery:</span>{" "}
                {order.delivery}
              </p>
 {/* ✅ Add this */}
  <p className="text-gray-800 font-semibold">
    Total Amount: ${order.total?.toFixed(2) || "0.00"}
  </p>
              <p className="font-semibold mt-3 mb-1">Items:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {order.cart.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} (${item.price})
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-gray-500 text-xs">
                Placed on: {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 🔑 Login Modal */}
      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onLogin={(userData) => {
            setUser(userData); // ✅ update state
            setLoginOpen(false);
            window.location.reload(); // ✅ reload so fetchOrders runs again
          }}
        />
      )}
    </div>
  );
};

export default MyOrders;
