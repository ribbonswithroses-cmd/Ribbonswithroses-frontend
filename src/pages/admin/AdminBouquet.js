import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

const AdminBouquetPage = () => {
  const [bouquets, setBouquets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [editingId, setEditingId] = useState(null); // ✅ for update mode

  // Fetch bouquets
  const fetchBouquets = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/bouquets");
      setBouquets(res.data);
    } catch (err) {
      console.error("Error fetching bouquets:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBouquets();
  }, []);

  // Handle image select (max 2)
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 2) {
      alert("You can only upload up to 2 images");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  // Remove selected image before upload
  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Create or Update bouquet
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Fill all fields");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    images.forEach((img) => formData.append("images", img));

    try {
      if (editingId) {
        // ✅ Update
        await axios.put(`/bouquets/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
        setEditingId(null);
      } else {
        // ✅ Create
        await axios.post("/bouquets", formData, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
      }

      // Reset form
      setName("");
      setPrice("");
      setDescription("");
      setImages([]);
      fetchBouquets();
    } catch (err) {
      console.error("Error saving bouquet:", err);
    }
  };

  // Load bouquet into form for editing
  const handleEdit = (bouquet) => {
    setEditingId(bouquet._id);
    setName(bouquet.name);
    setPrice(bouquet.price);
    setDescription(bouquet.description || "");
    setImages([]); // user can upload new ones
  };

  // Delete bouquet
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this bouquet?")) return;
    try {
      await axios.delete(`/bouquets/${id}`, { withCredentials: true });
      fetchBouquets();
    } catch (err) {
      console.error("Error deleting bouquet:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🌸 Manage Bouquets</h1>

      {/* Create / Update Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Bouquet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="Bouquet Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Bouquet Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="border p-2 w-full"
        />

        {/* Preview selected images */}
        <div className="flex gap-4">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img
                src={URL.createObjectURL(img)}
                alt="preview"
                className="w-24 h-24 object-cover rounded"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className={`${
            editingId ? "bg-blue-600" : "bg-green-600"
          } text-white px-4 py-2 rounded`}
        >
          {editingId ? "Update Bouquet" : "Add Bouquet"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setPrice("");
              setDescription("");
              setImages([]);
            }}
            className="ml-3 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Bouquets List */}
      {loading ? (
        <p>Loading bouquets...</p>
      ) : bouquets.length === 0 ? (
        <p>No bouquets found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bouquets.map((b) => (
            <div key={b._id} className="border rounded-lg shadow p-4">
              <div className="flex gap-2 mb-2">
                {b.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={b.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                ))}
              </div>
              <h2 className="font-bold">{b.name}</h2>
              <p className="text-gray-600">${b.price}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(b)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBouquetPage;
