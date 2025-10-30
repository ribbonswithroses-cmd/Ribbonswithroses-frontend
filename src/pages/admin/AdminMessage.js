import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Trash2 } from "lucide-react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/contacts", { withCredentials: true });
      setMessages(res.data);
    } catch (error) {
      console.error("❌ Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`/contacts/${id}`, { withCredentials: true });
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      console.error("❌ Error deleting message", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Message</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id}>
              <td className="border px-4 py-2">{msg.name}</td>
              <td className="border px-4 py-2">{msg.email}</td>
              <td className="border px-4 py-2">{msg.phone}</td>
              <td className="border px-4 py-2">{msg.subject}</td>
<td className="border px-4 py-2">
  <textarea
    readOnly
    value={msg.message}
    rows={3}
    className="w-full p-2 border rounded resize-y"
  />
</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete Message"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
