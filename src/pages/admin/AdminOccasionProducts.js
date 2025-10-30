import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const AdminOccasionProducts = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    images: [],
  });
  const [editingProduct, setEditingProduct] = useState(null);

  // ✅ Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("/occasion-products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "images") {
      const files = Array.from(e.target.files);

      if (formData.images.length + files.length > 2) {
        alert("⚠️ You can only upload up to 2 images.");
        return;
      }

      setFormData({ ...formData, images: [...formData.images, ...files] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // ✅ Remove image before submit
  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  // ✅ Submit (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length === 0) {
      alert("⚠️ Please upload at least 1 image.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("description", formData.description);

    formData.images.forEach((img) => data.append("images", img));

    try {
      if (editingProduct) {
        await axios.put(`/occasion-products/${editingProduct._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditingProduct(null);
      } else {
        await axios.post("/occasion-products", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      fetchProducts();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Edit product
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      images: [], // new uploads only
    });
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await axios.delete(`/occasion-products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Reset form
  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      images: [],
    });
    setEditingProduct(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-pink-600 mb-6">
        {editingProduct ? "Edit Occasion Product" : "Add Occasion Product"}
      </h1>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-pink-300 rounded-lg p-3"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border border-pink-300 rounded-lg p-3"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border border-pink-300 rounded-lg p-3"
        >
          <option value="">Select Category</option>
          <option value="birthday">Birthday</option>
          <option value="fathers-day">Father's Day</option>
          <option value="mothers-day">Mother's Day</option>
          <option value="anniversary">Anniversary</option>
          <option value="express-love">Express Love</option>
          <option value="get-well">Get Well</option>
          <option value="valentines-day">Valentine's Day</option>
          <option value="congratulations">Congratulations</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-pink-300 rounded-lg p-3"
        />

        <input
          type="file"
          name="images"
          multiple
          onChange={handleChange}
          accept="image/*"
          className="border border-pink-300 rounded-lg p-3 shadow-sm bg-white"
          disabled={formData.images.length >= 2} // ✅ block after 2
          {...(!editingProduct ? { required: true } : {})}
        />

        {/* ✅ Show selected images with remove option */}
        {formData.images.length > 0 && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">
              {formData.images.length} of 2 image(s) selected
            </p>
            <div className="grid grid-cols-2 gap-3">
              {formData.images.map((file, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${idx}`}
                    className="h-24 w-full object-cover rounded-lg border border-pink-200 shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(idx)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

        {editingProduct && (
          <button
            type="button"
            onClick={resetForm}
            className="ml-4 bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Product List */}
      <h2 className="text-xl font-semibold text-pink-600 mt-10 mb-4">
        Occasion Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border border-pink-200 rounded-lg p-4 shadow-sm bg-white"
          >
            {/* ✅ Show multiple images */}
            {p.images && p.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mb-3">
                {p.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={p.name}
                    className="h-24 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-pink-600 font-semibold">${p.price}</p>
            <p className="text-sm text-gray-500">{p.category}</p>
            <p className="text-gray-700 text-sm mt-1">{p.description}</p>
            <div className="flex space-x-3 mt-3">
              <button
                onClick={() => handleEdit(p)}
                className="text-blue-600 hover:text-blue-800"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOccasionProducts;
