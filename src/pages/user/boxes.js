// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // ✅ Cover
// import boxesCover from "../../assets/coverbox.png";

// // ✅ Import all product images
// import box1 from "../../assets/box1.jpg";
// import box2 from "../../assets/box2.jpg";
// import box3 from "../../assets/box3.jpg";
// import box4 from "../../assets/box4.jpg";
// import box5 from "../../assets/box5.jpg";
// import box6 from "../../assets/box6.jpg";
// import box7 from "../../assets/box7.jpg";
// import box8 from "../../assets/box8.jpg";
// import box9 from "../../assets/box9.jpg";
// import box10 from "../../assets/box10.jpg";

// // ✅ Import "More to Discover" images
// import discover1 from "../../assets/discover1.jpg";
// import discover2 from "../../assets/discover2.jpg";
// import discover3 from "../../assets/discover3.jpg";

// const Boxes = () => {
//   const products = [
//     { id: 1, name: "Love & Lullabies", price: 20099, image: box1 },
//     { id: 2, name: "Eid ul Adha Treats", price: 17499, image: box2 },
//     { id: 3, name: "For Abbu", price: 9499, image: box3 },
//     { id: 4, name: "Muse of May", price: 9999, image: box4 },
//     { id: 5, name: "Blissful Moments", price: 14999, image: box5 },
//     { id: 6, name: "Floral Joy", price: 12999, image: box6 },
//     { id: 7, name: "Golden Treats", price: 17999, image: box7 },
//     { id: 8, name: "Dreamy Surprise", price: 13999, image: box8 },
//     { id: 9, name: "Rose Delight", price: 10999, image: box9 },
//     { id: 10, name: "Forever Love", price: 15999, image: box10 },
//   ];

//   const [sortOrder, setSortOrder] = useState("lowToHigh");

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortOrder === "lowToHigh") return a.price - b.price;
//     if (sortOrder === "highToLow") return b.price - a.price;
//     return 0;
//   });

//   return (
//     <div className="w-full">
//       {/* ✅ Cover Section */}
//       <div className="relative w-full h-[70vh]">
//         <img
//           src={boxesCover}
//           alt="Boxes Cover"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
//           <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">
//             Boxes
//           </h1>
//           <p className="text-white text-lg mt-4">
//             Elegant Gift Boxes with Love & Care
//           </p>
//         </div>
//       </div>

//       {/* ✅ Sort Section */}
//       <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-between items-center border-b pb-4">
//         <p className="text-gray-600 text-sm md:text-base">
//           {products.length} products
//         </p>
//         <div className="flex items-center gap-2">
//           <label
//             htmlFor="sort"
//             className="text-gray-700 text-sm font-medium tracking-wide"
//           >
//             SORT BY
//           </label>
//           <select
//             id="sort"
//             className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="lowToHigh">Price: Low to High</option>
//             <option value="highToLow">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* ✅ Product Grid */}
//       <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {sortedProducts.map((product) => (
//           <div
//             key={product.id}
//             className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-72 object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
//               <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold">
//                 Add to Cart
//               </button>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-medium text-gray-900">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mt-1">
//                 {product.price.toLocaleString()} PKR
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ More to Discover Section */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
//           More to Discover
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {/* Card 1 */}
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img
//               src={discover1}
//               alt="Substitution Policy"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-900">
//               Substitution Policy
//             </h3>
//             <Link
//               to="/policy"
//               className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
//             >
//               Policy
//             </Link>
//           </div>

//           {/* Card 2 */}
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img
//               src={discover2}
//               alt="Delivery Info"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-900">
//               Delivery Info
//             </h3>
//             <Link
//               to="/delivery"
//               className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
//             >
//               Explore
//             </Link>
//           </div>

//           {/* Card 3 */}
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img
//               src={discover3}
//               alt="About the Shop"
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-xl font-semibold text-gray-900">
//               About The Shop
//             </h3>
//             <Link
//               to="/about"
//               className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
//             >
//               Know Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Boxes;













// src/pages/user/Boxes.jsx
// import React, { useEffect, useState } from "react";
// import axios from "../../api/axios";
// import boxesCover from "../../assets/coverbox.png";
// import discover1 from "../../assets/discover1.jpg";
// import discover2 from "../../assets/discover2.jpg";
// import discover3 from "../../assets/discover3.jpg";

// const Boxes = () => {
//   const [sortOrder, setSortOrder] = useState("lowToHigh");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading]   = useState(true);
//   const [error, setError]       = useState("");

//   const fetchBoxes = async (order = "lowToHigh") => {
//     try {
//       setLoading(true);
//       const sort = order === "lowToHigh" ? "price_asc" : "price_desc";
//       const res = await axios.get(`/boxes?sort=${sort}`);
//       setProducts(res.data);
//     } catch (err) {
//       setError("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchBoxes(sortOrder); }, [sortOrder]);

//   return (
//     <div className="w-full">
//       {/* Cover */}
//       <div className="relative w-full h-[70vh]">
//         <img src={boxesCover} alt="Boxes Cover" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
//           <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">Boxes</h1>
//           <p className="text-white text-lg mt-4">Elegant Gift Boxes with Love & Care</p>
//         </div>
//       </div>

//       {/* Sort */}
//       <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-between items-center border-b pb-4">
//         <p className="text-gray-600 text-sm md:text-base">
//           {loading ? "Loading..." : `${products.length} products`}
//         </p>
//         <div className="flex items-center gap-2">
//           <label htmlFor="sort" className="text-gray-700 text-sm font-medium tracking-wide">SORT BY</label>
//           <select
//             id="sort"
//             className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="lowToHigh">Price: Low to High</option>
//             <option value="highToLow">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {loading && <p className="col-span-full text-center text-gray-500">Loading products…</p>}
//         {error && <p className="col-span-full text-center text-red-500">{error}</p>}

//         {!loading && !error && products.map((product) => (
//           <div key={product._id} className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
//             <img src={product.imageUrl} alt={product.name} className="w-full h-72 object-cover" />
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
//               <button className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold">
//                 Add to Cart
//               </button>
//             </div>
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
//               <p className="text-gray-600 mt-1">${product.price.toLocaleString()} </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More to Discover (unchanged) */}
//       <div className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">More to Discover</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img src={discover1} alt="Substitution Policy" className="w-full h-48 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900">Substitution Policy</h3>
//             <a href="/policy" className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Policy</a>
//           </div>
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img src={discover2} alt="Delivery Info" className="w-full h-48 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900">Delivery Info</h3>
//             <a href="/delivery" className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Explore</a>
//           </div>
//           <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
//             <img src={discover3} alt="About the Shop" className="w-full h-48 object-cover rounded-md mb-4" />
//             <h3 className="text-xl font-semibold text-gray-900">About The Shop</h3>
//             <a href="/about" className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">Know Us</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Boxes;




// src/pages/user/Boxes.jsx
import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import boxesCover from "../../assets/coverbox.png";
import discover1 from "../../assets/discover1.jpg";
import discover2 from "../../assets/discover2.jpg";
import discover3 from "../../assets/discover3.jpg";
import { useCart } from "../../context/CartContext"; // ✅ import cart context

const Boxes = () => {
  const [sortOrder, setSortOrder] = useState("lowToHigh");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart(); // ✅ access addToCart

  const fetchBoxes = async (order = "lowToHigh") => {
    try {
      setLoading(true);
      const sort = order === "lowToHigh" ? "price_asc" : "price_desc";
      const res = await axios.get(`/boxes?sort=${sort}`);
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoxes(sortOrder);
  }, [sortOrder]);

  return (
    <div className="w-full">
      {/* Cover */}
      <div className="relative w-full h-[70vh]">
        <img
          src={boxesCover}
          alt="Boxes Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide">
            Boxes
          </h1>
          <p className="text-white text-lg mt-4">
            Elegant Gift Boxes with Love & Care
          </p>
        </div>
      </div>

      {/* Sort */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex justify-between items-center border-b pb-4">
        <p className="text-gray-600 text-sm md:text-base">
          {loading ? "Loading..." : `${products.length} products`}
        </p>
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-gray-700 text-sm font-medium tracking-wide"
          >
            SORT BY
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading && (
          <p className="col-span-full text-center text-gray-500">
            Loading products…
          </p>
        )}
        {error && (
          <p className="col-span-full text-center text-red-500">{error}</p>
        )}

        {!loading &&
          !error &&
          products.map((product) => (
            <div
              key={product._id}
              className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
                <button
                onClick={() =>
  addToCart({
    id: product._id,
    name: product.name,
    image: product.imageUrl,
    price: Number(product.price || product.boxPrice || 0),
    quantity: 1,
  })
}

                  className="bg-white text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
                >
                  Add to Cart
                </button>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1">
  ${Number(product.price || product.boxPrice || 0).toLocaleString()}
</p>

              </div>
            </div>
          ))}
      </div>

      {/* More to Discover */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">
          More to Discover
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover1}
              alt="Substitution Policy"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Substitution Policy
            </h3>
            <a
              href="/policy"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Policy
            </a>
          </div>
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover2}
              alt="Delivery Info"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Delivery Info
            </h3>
            <a
              href="/delivery"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Explore
            </a>
          </div>
          <div className="text-center border rounded-lg shadow hover:shadow-lg p-4">
            <img
              src={discover3}
              alt="About the Shop"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              About The Shop
            </h3>
            <a
              href="/about"
              className="inline-block mt-3 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
            >
              Know Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
