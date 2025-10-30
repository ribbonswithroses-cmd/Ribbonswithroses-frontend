// src/pages/CustomOrder.jsx
import React, { useState } from "react";
import axios from "../../api/axios";
import {  Package2, Image, Send } from "lucide-react";

const CustomOrder = () => {
  const [mode, setMode] = useState("existing"); // 'existing' or 'upload'
  const [formData, setFormData] = useState({
    articleNo: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    flowers: "",
    colorTheme: "",
    wrapping: "",
    extraItems: "",
    budget: "",
    occasion: "",
    deliveryDate: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [matchedProduct, setMatchedProduct] = useState(null);

  // ✅ Handle field updates
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ✅ Auto-fetch product details (mock using name/article match)
  const handleFetchProduct = async () => {
    if (!formData.articleNo.trim()) return alert("Enter product/article name");
    try {
      const res = await axios.get(`/bouquets`); // or your products endpoint
      const match = res.data.find(
        (item) =>
          item.name.toLowerCase() === formData.articleNo.toLowerCase().trim()
      );
      if (match) {
        setMatchedProduct(match);
      } else {
        setMatchedProduct(null);
        alert("No product found with this name!");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching products.");
    }
  };const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  try {
    const formDataToSend = new FormData();

    // 🔹 Attach the file (only if mode = upload)
    if (mode === "upload" && image) {
      formDataToSend.append("uploadImage", image);
    }

    // 🔹 Build structured JSON fields (for backend clarity)
    const payload =
      mode === "existing"
        ? {
            type: "existing",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            productName: formData.articleNo,
            changes: {
              flowers: formData.flowers ? [formData.flowers] : [],
              colorTheme: formData.colorTheme,
              wrappingSheet: formData.wrapping,
              extras: formData.extraItems ? [formData.extraItems] : [],
            },
          }
        : {
            type: "upload",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            flowerType: formData.flowers,
            occasion: formData.occasion,
            budget: formData.budget,
            deliveryDate: formData.deliveryDate,
          };

    // 🔹 Add JSON payload as string (multer can’t read nested JSON directly)
    formDataToSend.append("data", JSON.stringify(payload));

    await axios.post("/custom-orders", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setStatus("✅ Custom order submitted successfully! Wait for the response");
    setFormData({
      articleNo: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      flowers: "",
      colorTheme: "",
      wrapping: "",
      extraItems: "",
      budget: "",
      occasion: "",
      deliveryDate: "",
    });
    setImage(null);
    setPreview("");
  } catch (err) {
    setStatus("❌ Failed to submit order");
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
        Create Your Custom Order
      </h1>

      {/* Mode Switcher */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setMode("existing")}
          className={`px-6 py-2 rounded-lg border ${
            mode === "existing"
              ? "bg-pink-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <Package2 className="inline mr-2 w-4 h-4" />
          Customize Existing Product
        </button>
        <button
          onClick={() => setMode("upload")}
          className={`px-6 py-2 rounded-lg border ${
            mode === "upload"
              ? "bg-pink-600 text-white"
              : "bg-white border-gray-300"
          }`}
        >
          <Image className="inline mr-2 w-4 h-4" />
          Upload Your Own Design
        </button>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        {/* Common Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border p-3 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border p-3 rounded-lg"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* 🪻 Option 1: Existing Product */}
        {mode === "existing" && (
          <>
            <div className="flex gap-3">
              <input
                type="text"
                name="articleNo"
                placeholder="Enter Product / Article Name"
                className="flex-1 border p-3 rounded-lg"
                value={formData.articleNo}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handleFetchProduct}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Search
              </button>
            </div>

            {matchedProduct && (
              <div className="flex items-center gap-4 mt-4 border rounded-lg p-3 bg-pink-50">
                <img
                  src={matchedProduct.images?.[0]}
                  alt={matchedProduct.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <p className="font-semibold">{matchedProduct.name}</p>
                  <p className="text-sm text-gray-600">
                    Base Price: ${matchedProduct.price}
                  </p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                name="flowers"
                placeholder="Change Flowers (optional)"
                className="border p-3 rounded-lg"
                value={formData.flowers}
                onChange={handleChange}
              />
              <input
                type="text"
                name="colorTheme"
                placeholder="Change Color Theme"
                className="border p-3 rounded-lg"
                value={formData.colorTheme}
                onChange={handleChange}
              />
              <input
                type="text"
                name="wrapping"
                placeholder="Wrapping Type or Sheet"
                className="border p-3 rounded-lg"
                value={formData.wrapping}
                onChange={handleChange}
              />
              <input
                type="text"
                name="extraItems"
                placeholder="Add Extra Items (balloon, chocolates...)"
                className="border p-3 rounded-lg"
                value={formData.extraItems}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* 🌸 Option 2: Upload Your Own Design */}
        {mode === "upload" && (
          <>
            <div>
              <label className="block mb-2 font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full border p-3 rounded-lg"
              />
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-48 h-48 mt-3 object-cover rounded-lg border"
                />
              )}
            </div>

            <input
              type="text"
              name="flowers"
              placeholder="Type of Flowers"
              className="border p-3 rounded-lg w-full"
              value={formData.flowers}
              onChange={handleChange}
            />
            <input
              type="text"
              name="occasion"
              placeholder="Occasion (Wedding, Birthday, etc.)"
              className="border p-3 rounded-lg w-full"
              value={formData.occasion}
              onChange={handleChange}
            />
            <input
              type="text"
              name="budget"
              placeholder="Budget Range"
              className="border p-3 rounded-lg w-full"
              value={formData.budget}
              onChange={handleChange}
            />
            <input
              type="date"
              name="deliveryDate"
              className="border p-3 rounded-lg w-full"
              value={formData.deliveryDate}
              onChange={handleChange}
            />
          </>
        )}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Additional Instructions or Notes"
          className="border p-3 rounded-lg w-full h-28"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700"
        >
          <Send className="w-4 h-4" />
          {loading ? "Submitting..." : "Submit Custom Order"}
        </button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default CustomOrder;
