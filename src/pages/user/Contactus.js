import React, { useState } from "react";
import axios from "../../api/axios"; // <-- axios instance (baseURL = http://localhost:5000/api)
import img from "../../assets/Contactbanner.jpg";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await axios.post("/contacts", formData);
      setSuccess("✅ Your message has been sent successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div
        className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Ribbon with roses</h1>
          <p className="text-sm text-orange-500">
            <span className="text-white">Home</span> / Contact
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div
          className="relative bg-black rounded shadow overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-80 p-6 text-white h-full">
            <h2 className="text-xl font-bold mb-2">Ribbon with Roses</h2>
            <p className="text-sm mb-4">
              Get in touch with us for quick support and friendly assistance.
            </p>

            <div className="mb-4">
              <h4 className="font-bold">Our Pickup Address</h4>
              <p className="text-sm">
Shopping mall in Egg Harbor Township, New Jersey                <br />
                USA – New jersey
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Phone</h4>
              <p className="text-sm">
                ‪609227 8449‬ 
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Email</h4>
              <p className="text-sm">
                ribbonswithroses@gmail.com
                <br />
              </p>
            </div>

            <div className="mt-6">
              <h4 className="font-bold mb-2">Follow our social media :</h4>
              <div className="flex gap-3">
                <a
                  href=" https://www.facebook.com/share/16LSKpJe38/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-lg"
                >
                  <FaFacebookF />
                </a>
                <a
                  href=" https://www.instagram.com/ribbonswithroses/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-lg"
                >
                  <FaInstagram />
                </a>
              <a
  href="https://wa.me/16092278449?text=Hello!%20I%20need%20some%20details%20about%20your%20products."
  target="_blank"
  rel="noopener noreferrer"
  className="w-8 h-8 flex items-center justify-center bg-orange-600 rounded text-white text-lg"
>
  <FaWhatsapp />
</a>

              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">
            Message us, we will be in touch shortly
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Have a query or suggestion? Drop us a quick message, and we’ll be
            happy to assist you.
          </p>

          {success && <p className="text-green-600 mb-4">{success}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
              required
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom: Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          title="Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.245953337594!2d-74.55569292562959!3d39.39594131713688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0e8539d655261%3A0x2c4b942265ccdeb1!2s6801%20Black%20Horse%20Pike%2C%20Egg%20Harbor%20Township%2C%20NJ%2008234%2C%20USA!5e0!3m2!1sen!2s!4v1761124456409!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
