import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import AdminSidebar from "../../components/AdminSidebar";

const AdminBoxes = () => {
  const [boxes, setBoxes] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState(null);

  const token = localStorage.getItem("adminToken");

  const fetchBoxes = async () => {
    try {
      const res = await axios.get("/boxes");
      setBoxes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddBox = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("image", image);

      await axios.post("/boxes", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setName("");
      setPrice("");
      setImage(null);
      fetchBoxes();
    } catch (err) {
      alert("Failed to add box");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/boxes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchBoxes();
    } catch (err) {
      alert("Failed to delete box");
    }
  };

  const handleEdit = (box) => {
    setEditingId(box._id);
    setEditName(box.name);
    setEditPrice(box.price);
    setEditImage(null); // start without new file
  };

  const handleUpdate = async (id) => {
    try {
      const formData = new FormData();
      if (editName) formData.append("name", editName);
      if (editPrice) formData.append("price", editPrice);
      if (editImage) formData.append("image", editImage);

      await axios.put(`/boxes/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEditingId(null);
      setEditName("");
      setEditPrice("");
      setEditImage(null);
      fetchBoxes();
    } catch (err) {
      alert("Failed to update box");
    }
  };

  useEffect(() => {
    fetchBoxes();
  }, []);

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Manage Boxes</h1>

        {/* Add new box */}
        <form
          onSubmit={handleAddBox}
          className="bg-white shadow-md p-6 rounded-lg mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Box</h2>
          <input
            type="text"
            placeholder="Box name"
            className="border p-2 w-full mb-4 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 w-full mb-4 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="mb-4"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button className="bg-gray-900 text-white px-6 py-2 rounded">
            Add Box
          </button>
        </form>

        {/* Existing boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {boxes.map((box) => (
            <div key={box._id} className="border rounded-lg shadow bg-white p-4">
              {editingId === box._id ? (
                <>
                  <input
                    type="text"
                    className="border p-2 w-full mb-2 rounded"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    type="number"
                    className="border p-2 w-full mb-2 rounded"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    className="mb-2"
                    onChange={(e) => setEditImage(e.target.files[0])}
                  />
                  <button
                    onClick={() => handleUpdate(box._id)}
                    className="bg-green-600 text-white px-4 py-1 rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-4 py-1 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <img
                    src={box.imageUrl}
                    alt={box.name}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold">{box.name}</h3>
                  <p className="text-gray-600">${box.price}</p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(box)}
                      className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(box._id)}
                      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBoxes;
