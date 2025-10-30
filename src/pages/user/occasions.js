import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX, FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "../../api/axios"; // ✅ adjust path if needed

// ✅ Define categories once
const occasionsList = [
  { id: "birthday", name: "🎂 Birthday" },
  { id: "fathers-day", name: "👔 Father’s Day" },
  { id: "mothers-day", name: "🌸 Mother’s Day" },
  { id: "anniversary", name: "💍 Anniversary" },
  { id: "express-love", name: "❤️ Express Love" },
  { id: "get-well", name: "💐 Get Well Soon" },
  { id: "valentines-day", name: "💕 Valentine’s Day" },
  { id: "congratulations", name: "🎉 Congratulations" },
];

const Occasions = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [products, setProducts] = useState([]);

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/occasion-products");
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Back to top button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex gap-8">
      {/* ✅ Desktop Sidebar */}
      <aside className="hidden md:block w-64 sticky top-24 h-fit bg-white shadow-lg rounded-xl p-4">
        <h3 className="text-lg font-semibold mb-4">Jump to Occasion</h3>
        <ul className="space-y-2 text-sm">
          {occasionsList.map((occ) => (
            <li key={occ.id}>
              <HashLink
                smooth
                to={`#${occ.id}`}
                className="block hover:text-pink-600"
              >
                {occ.name}
              </HashLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* ✅ Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed bottom-6 right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FiMenu size={22} />
      </button>

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>

          <aside className="fixed top-0 left-0 h-full w-72 bg-white shadow-2xl p-6 z-50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold">Jump to Occasion</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            <ul className="space-y-3 text-sm">
              {occasionsList.map((occ) => (
                <li key={occ.id}>
                  <HashLink
                    smooth
                    to={`#${occ.id}`}
                    onClick={() => setSidebarOpen(false)}
                    className="block hover:text-pink-600"
                  >
                    {occ.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}

      {/* ✅ Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-gray-800 text-white p-4 rounded-full shadow-lg z-50 hover:bg-gray-700 transition"
        >
          <FiArrowUp size={20} />
        </button>
      )}

      {/* ✅ Main Content */}
      <main className="flex-1">
        <h1 className="text-4xl font-bold text-center mb-12">All Occasions</h1>

        {occasionsList.map((occ) => (
          <section id={occ.id} key={occ.id} className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">{occ.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === occ.id)
                .map((p) => (
                  <div
                    key={p._id}
                    className="rounded-xl shadow-md overflow-hidden bg-white border"
                  >
                    {/* Product Image(s) */}
<div className="h-48 flex items-center justify-center bg-gray-100 relative overflow-hidden">
  {p.images && p.images.length > 0 && (
    <>
      {/* First image always visible */}
      <img
        src={p.images[0]}
        alt={p.name}
        className="h-full w-full object-cover"
      />

      {/* Second image (if exists) fades in on hover */}
      {p.images.length > 1 && (
        <img
          src={p.images[1]}
          alt={`${p.name} extra`}
          className="h-full w-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition duration-500"
        />
      )}
    </>
  )}
</div>


                    {/* Product Footer */}
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      <p className="text-pink-600 font-bold mb-2">
                        ${p.price}
                      </p>
                     <Link
  to={`/occasions/${p._id}`}
  className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-700 transition"
>
  View Details
</Link>

                    </div>
                  </div>
                ))}

              {/* If no products in category */}
              {products.filter((p) => p.category === occ.id).length === 0 && (
                <p className="text-gray-500 italic col-span-full">
                  No products available in this category yet.
                </p>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Occasions;
