// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../../api/axios";

// // ✅ Import your sheet images from assets
// import blush from "../../assets/keychain.png";
// import skyblue from "../../assets/keychain.png";
// import mint from "../../assets/keychain.png";
// import coral from "../../assets/keychain.png";
// import lavender from "../../assets/keychain.png";
// import gold from "../../assets/keychain.png";
// import teal from "../../assets/keychain.png";
// import hotpink from "../../assets/keychain.png";
// import slate from "../../assets/keychain.png";
// import neon from "../../assets/keychain.png";

// // ✅ Define sheet options with images & prices
// const sheetOptions = [
//   { id: 1, name: "Blush Pink", price: 5, image: blush },
//   { id: 2, name: "Sky Blue", price: 4, image: skyblue },
//   { id: 3, name: "Mint Green", price: 3, image: mint },
//   { id: 4, name: "Coral", price: 6, image: coral },
//   { id: 5, name: "Lavender", price: 5, image: lavender },
//   { id: 6, name: "Gold", price: 7, image: gold },
//   { id: 7, name: "Teal", price: 4, image: teal },
//   { id: 8, name: "Hot Pink", price: 6, image: hotpink },
//   { id: 9, name: "Slate", price: 3, image: slate },
//   { id: 10, name: "Mint Neon", price: 5, image: neon },
// ];

// const toNumber = (val) => {
//   if (typeof val === "number") return val;
//   if (!val) return 0;
//   const num = parseFloat(String(val).replace(/[^\d.]/g, ""));
//   return isNaN(num) ? 0 : num;
// };

// const formatUSD = (n) =>
//   new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

// const ProductDetail = ({ type }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [mainImage, setMainImage] = useState("");
//   const [selectedSheet, setSelectedSheet] = useState(null);

//   const endpoint =
//     type === "bouquet" ? `/bouquets/${id}` : `/occasion-products/${id}`;

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(endpoint);
//         setProduct(res.data);
//         if (res.data?.images?.length) setMainImage(res.data.images[0]);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load product details.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, [id, endpoint]);

//   if (loading) return <p className="text-center py-12">Loading product details...</p>;
//   if (error) return <p className="text-center text-red-600 py-12">{error}</p>;
//   if (!product) return <p className="text-center py-12">Product not found.</p>;

//   const basePrice = toNumber(product.price);
//   const addOn = selectedSheet?.price ?? 0;
//   const totalPrice = basePrice + addOn;

//   const handleAddToCart = (sheet = selectedSheet) => {
//     const payload = {
//       id: product.id,
//       name: product.name,
//       basePrice,
//       selectedSheet: sheet
//         ? { id: sheet.id, name: sheet.name, price: sheet.price, image: sheet.image }
//         : null,
//       totalPrice: basePrice + (sheet?.price ?? 0),
//       image: mainImage,
//     };
//     console.log("ADD TO CART", payload);
//     alert(
//       sheet
//         ? `Added with sheet "${sheet.name}" — ${formatUSD(payload.totalPrice)}`
//         : `Added with default design — ${formatUSD(payload.totalPrice)}`
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12">
//       {/* Back */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
//       >
//         ⬅ Back
//       </button>

//       {/* Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-6">
//         {/* Images column */}
//         <div>
//           <img
//             src={mainImage || "https://via.placeholder.com/600x450.png?text=No+Image"}
//             alt={product.name}
//             className="w-full h-[420px] object-cover rounded-xl shadow mb-4"
//           />

//           {/* Product thumbnails (if any) */}
//           {product.images?.length > 1 && (
//             <div className="flex gap-3 overflow-x-auto">
//               {product.images.map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`${product.name} ${idx + 1}`}
//                   onClick={() => setMainImage(img)}
//                   className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
//                     mainImage === img ? "border-pink-600" : "border-transparent"
//                   }`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Info column */}
//         <div>
//           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//           <p className="text-gray-600 mb-4">{product.description}</p>

//           {/* Pricing block */}
//           <div className="mb-6 space-y-1">
//             <div className="text-lg">
//               <span className="font-medium">Base:</span> {formatUSD(basePrice)}
//             </div>
//             <div className="text-lg">
//               <span className="font-medium">Sheet:</span>{" "}
//               {selectedSheet ? (
//                 <>
//                   {selectedSheet.name} (+{formatUSD(selectedSheet.price)})
//                   <button
//                     onClick={() => setSelectedSheet(null)}
//                     className="ml-3 text-sm text-gray-500 underline"
//                   >
//                     Clear
//                   </button>
//                 </>
//               ) : (
//                 "None"
//               )}
//             </div>
//             <div className="text-2xl font-semibold text-pink-600">
//               Total: {formatUSD(totalPrice)}
//             </div>
//           </div>

//           {/* Main Add to Cart */}
//           <button
//             onClick={() => handleAddToCart()}
//             className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-md mb-8"
//           >
//             Add to Cart
//           </button>

//           {/* Sheet selector */}
//           <h3 className="text-lg font-semibold mb-3">Choose a Paper Sheet (optional)</h3>
//           <p className="text-sm text-gray-500 mb-4">
//             Select a sheet to update the total. You can also add directly with a specific
//             sheet using the button on each card.
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
//             {sheetOptions.map((sheet) => {
//               const isSelected = selectedSheet?.id === sheet.id;
//               return (
//                 <div
//                   key={sheet.id}
//                   className={`rounded-xl border p-2 hover:shadow transition ${
//                     isSelected ? "border-pink-500" : "border-gray-200"
//                   }`}
//                 >
//                   <img
//                     src={sheet.image}
//                     alt={sheet.name}
//                     className="w-full h-24 object-cover rounded-lg mb-2"
//                   />
//                   <div className="text-sm font-medium">{sheet.name}</div>
//                   <div className="text-sm text-gray-600 mb-2">
//                     + {formatUSD(sheet.price)}
//                   </div>

//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => setSelectedSheet(sheet)}
//                       className={`flex-1 text-xs px-2 py-1 rounded-md border ${
//                         isSelected
//                           ? "bg-pink-50 border-pink-500 text-pink-700"
//                           : "bg-white border-gray-300"
//                       }`}
//                     >
//                       {isSelected ? "Selected" : "Select"}
//                     </button>
//                     <button
//                       onClick={() => handleAddToCart(sheet)}
//                       className="flex-1 text-xs px-2 py-1 rounded-md bg-pink-600 text-white hover:bg-pink-700"
//                     >
//                       Add with this
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiLogOut } from "react-icons/fi";
// import Logo from "../../src/assets/FlowerLogo.png";
// import LoginModal from "./LoginModal"; 
// import CartDrawer from "./CartDrawer";       // ✅ import cart drawer
// import CheckoutModal from "./CheckoutModal"; // ✅ import checkout modal
// import { Toaster } from "react-hot-toast";
// import axios from "../api/axios";
// import toast from "react-hot-toast";
// import { useCart } from "../context/CartContext"; 

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);     // ✅ cart drawer state
//   const [checkoutOpen, setCheckoutOpen] = useState(false); // ✅ checkout modal state
//   const [user, setUser] = useState(null); 
//   const { cart } = useCart(); 

//   const handleLogin = (email) => {
//     setUser({ email }); 
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post("/users/logout", {}, { withCredentials: true });
//       toast.success("Logout successful!");
//       setUser(null); 
//     } catch (err) {
//       toast.error("Logout failed!");
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <Toaster position="top-right" /> 

//       <nav
//         className="
//           flex items-center justify-between
//           px-4 md:px-8 py-4 md:py-6
//           min-h-[70px]
//           bg-[#f5ebe0] text-black
//           shadow-md
//         "
//       >
//         {/* Logo */}
//         <Link to="/" className="relative z-10 flex items-center">
//           <img
//             src={Logo}
//             alt="House of Flowers Logo"
//             className="h-20 w-auto object-contain"
//           />
//         </Link>

//         {/* Menu Icon */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="block md:hidden"
//         >
//           <FiMenu size={24} />
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-10 text-sm font-medium relative">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/bouquets">Bouquets</Link></li>
//           <li><Link to="/boxes">Boxes</Link></li>
//           <li><Link to="/keychain">Keychains</Link></li>
//           <li><Link to="/contact">Contact-us</Link></li>

//           {/* Occasions Dropdown */}
//           <li className="relative group">
//             <button className="hover:text-pink-500">Occasions ▾</button>
//             <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[180px] z-50">
//               <li><HashLink smooth to="/occasions#birthday" className="block px-4 py-2 hover:bg-pink-50">🎂 Birthday</HashLink></li>
//               <li><HashLink smooth to="/occasions#fathers-day" className="block px-4 py-2 hover:bg-pink-50">👔 Father’s Day</HashLink></li>
//               <li><HashLink smooth to="/occasions#mothers-day" className="block px-4 py-2 hover:bg-pink-50">🌸 Mother’s Day</HashLink></li>
//               <li><HashLink smooth to="/occasions#anniversary" className="block px-4 py-2 hover:bg-pink-50">💍 Anniversary</HashLink></li>
//               <li><HashLink smooth to="/occasions#express-love" className="block px-4 py-2 hover:bg-pink-50">❤ Express Love</HashLink></li>
//               <li><HashLink smooth to="/occasions#get-well" className="block px-4 py-2 hover:bg-pink-50">💐 Get Well Soon</HashLink></li>
//               <li><HashLink smooth to="/occasions#valentines-day" className="block px-4 py-2 hover:bg-pink-50">💕 Valentine’s Day</HashLink></li>
//               <li><HashLink smooth to="/occasions#congratulations" className="block px-4 py-2 hover:bg-pink-50">🎉 Congratulations</HashLink></li>
//             </ul>
//           </li>
//         </ul>

//         {/* Desktop Icons */}
//         <div className="hidden md:flex items-center gap-4 text-lg relative">
//           <FiSearch />
//           {user ? (
//             <FiLogOut onClick={handleLogout} className="cursor-pointer" />
//           ) : (
//             <FiUser onClick={() => setShowLogin(true)} className="cursor-pointer" />
//           )}

//           {/* Cart icon with badge */}
//           <div className="relative cursor-pointer" onClick={() => setDrawerOpen(true)}>
//             <FiShoppingCart />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden w-full bg-[#f5ebe0] text-black absolute top-[70px] left-0 z-40 shadow-md">
//           <ul className="flex flex-col items-center py-4 space-y-4">
//             <li><Link onClick={() => setMenuOpen(false)} to="/">Home</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/bouquets">Bouquets</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/boxes">Boxes</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/keychain">Keychains</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/contact">Contact-us</Link></li>

//             {/* Occasions List */}
//             <li className="font-semibold">Occasions</li>
//             <li><HashLink smooth to="/occasions#birthday" onClick={() => setMenuOpen(false)}>🎂 Birthday</HashLink></li>
//             <li><HashLink smooth to="/occasions#fathers-day" onClick={() => setMenuOpen(false)}>👔 Father’s Day</HashLink></li>
//             <li><HashLink smooth to="/occasions#mothers-day" onClick={() => setMenuOpen(false)}>🌸 Mother’s Day</HashLink></li>
//             <li><HashLink smooth to="/occasions#anniversary" onClick={() => setMenuOpen(false)}>💍 Anniversary</HashLink></li>
//             <li><HashLink smooth to="/occasions#express-love" onClick={() => setMenuOpen(false)}>❤ Express Love</HashLink></li>
//             <li><HashLink smooth to="/occasions#get-well" onClick={() => setMenuOpen(false)}>💐 Get Well Soon</HashLink></li>
//             <li><HashLink smooth to="/occasions#valentines-day" onClick={() => setMenuOpen(false)}>💕 Valentine’s Day</HashLink></li>
//             <li><HashLink smooth to="/occasions#congratulations" onClick={() => setMenuOpen(false)}>🎉 Congratulations</HashLink></li>
//           </ul>
//         </div>
//       )}

//       {/* Login Modal */}
//       {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}

//       {/* ✅ Cart Drawer */}
//       <CartDrawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         onCheckout={() => {
//           setDrawerOpen(false);
//           setCheckoutOpen(true);
//         }}
//       />

//       {/* ✅ Checkout Modal */}
//       {checkoutOpen && (
//         <CheckoutModal onClose={() => setCheckoutOpen(false)} />
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useCart } from "../../context/CartContext"; // ✅ use cart context

// ✅ Import your sheet images from assets
import CoachPink from "../../assets/rwr paper 1.jpg";
import DiorBlack from "../../assets/rwr paper 2.jpg";
import HermesWhite from "../../assets/rwr paper 3.jpg";
import Cow from "../../assets/rwr paper 5.jpg";
import DiorGreen from "../../assets/rwr paper 6.jpg";
import DiorRed from "../../assets/rwr paper 7.jpg";
import DiorPink from "../../assets/rwr paper 8.jpg";
import SimpleWhite from "../../assets/rwr paper 9.jpg";
import HermesPink from "../../assets/rwr paper 10.jpg";
import SimpleBlack from "../../assets/rwr paper 4.jpg";


// ✅ Define sheet options with images & prices
const sheetOptions = [
  { id: 1, name: "Coach Pink", price: 5, image: CoachPink},
  { id: 2, name: "Hermes White", price: 5, image: HermesWhite },
  { id: 3, name: "Hermes Pink ", price: 5, image: HermesPink },
  { id: 4, name: "Cow", price: 4, image: Cow },
  { id: 5, name: "Dior Black", price: 5, image: DiorBlack },
  { id: 6, name: "Dior Green", price: 5, image: DiorGreen },
  { id: 7, name: "Dior Red", price: 5, image: DiorRed },
  { id: 8, name: "Dior Pink ", price: 5, image: DiorPink },
   { id: 9, name: "Simple Black", price: 3, image: SimpleBlack },
  { id: 10, name: "Simple White", price: 3, image: SimpleWhite },
  
];

const toNumber = (val) => {
  if (typeof val === "number") return val;
  if (!val) return 0;
  const num = parseFloat(String(val).replace(/[^\d.]/g, ""));
  return isNaN(num) ? 0 : num;
};

const formatUSD = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const ProductDetail = ({ type }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ access cart functions

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [selectedSheet, setSelectedSheet] = useState(null);

  const endpoint =
    type === "bouquet" ? `/bouquets/${id}` : `/occasion-products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(endpoint);
        setProduct(res.data);
        if (res.data?.images?.length) setMainImage(res.data.images[0]);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, endpoint]);

  if (loading) return <p className="text-center py-12">Loading product details...</p>;
  if (error) return <p className="text-center text-red-600 py-12">{error}</p>;
  if (!product) return <p className="text-center py-12">Product not found.</p>;

  const basePrice = toNumber(product.price);
  const addOn = selectedSheet?.price ?? 0;
  const totalPrice = basePrice + addOn;

  // ✅ Add to Cart handler
  const handleAddToCart = (sheet = selectedSheet) => {
    const payload = {
      id: sheet ? `${product.id}-${sheet.id}` : product.id, // unique if sheet selected
      name: product.name,
      basePrice,
      selectedSheet: sheet
        ? { id: sheet.id, name: sheet.name, price: sheet.price, image: sheet.image }
        : null,
      totalPrice: basePrice + (sheet?.price ?? 0),
      image: mainImage,
      quantity: 1,
    };
    addToCart(payload); // ✅ push into global cart
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
      >
        ⬅ Back
      </button>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl p-6">
        {/* Images column */}
        <div>
          <img
            src={mainImage || "https://via.placeholder.com/600x450.png?text=No+Image"}
            alt={product.name}
            className="w-full h-[420px] object-cover rounded-xl shadow mb-4"
          />

          {/* Product thumbnails (if any) */}
          {product.images?.length > 1 && (
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img ? "border-pink-600" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info column */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Pricing block */}
          <div className="mb-6 space-y-1">
            <div className="text-lg">
              <span className="font-medium">Base:</span> {formatUSD(basePrice)}
            </div>
            <div className="text-lg">
              <span className="font-medium">Sheet:</span>{" "}
              {selectedSheet ? (
                <>
                  {selectedSheet.name} (+{formatUSD(selectedSheet.price)})
                  <button
                    onClick={() => setSelectedSheet(null)}
                    className="ml-3 text-sm text-gray-500 underline"
                  >
                    Clear
                  </button>
                </>
              ) : (
                "None"
              )}
            </div>
            <div className="text-2xl font-semibold text-pink-600">
              Total: {formatUSD(totalPrice)}
            </div>
          </div>

          {/* Main Add to Cart */}
          <button
            onClick={() => handleAddToCart()}
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-md mb-8"
          >
            Add to Cart
          </button>

          {/* Sheet selector */}
          <h3 className="text-lg font-semibold mb-3">Choose a Paper Sheet (If You Want To Attached Different Sheet)</h3>
          <p className="text-sm text-gray-500 mb-4">
            Select a sheet to update the total. You can also add directly with a specific
            sheet using the button on each card.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {sheetOptions.map((sheet) => {
              const isSelected = selectedSheet?.id === sheet.id;
              return (
                <div
                  key={sheet.id}
                  className={`rounded-xl border p-2 hover:shadow transition ${
                    isSelected ? "border-pink-500" : "border-gray-200"
                  }`}
                >
                  <img
                    src={sheet.image}
                    alt={sheet.name}
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium">{sheet.name}</div>
                  <div className="text-sm text-gray-600 mb-2">
                    + {formatUSD(sheet.price)}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedSheet(sheet)}
                      className={`flex-1 text-xs px-2 py-1 rounded-md border ${
                        isSelected
                          ? "bg-pink-50 border-pink-500 text-pink-700"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {isSelected ? "Selected" : "Select"}
                    </button>
                    <button
                      onClick={() => handleAddToCart(sheet)}
                      className="flex-1 text-xs px-2 py-1 rounded-md bg-pink-600 text-white hover:bg-pink-700"
                    >
                      Add with this
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
