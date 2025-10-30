
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
// import Logo from "../../src/assets/FlowerLogo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
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
//        <Link to="/" className="relative z-10 flex items-center">
//           <img
//             src={Logo}
//              alt="House of Flowers Logo"
//              className="h-20 w-auto object-contain" 
            
//            />
//         </Link> 

//         {/* Mobile Icons */}
//         <div className="flex md:hidden items-center gap-4 text-lg">
//           <FiSearch />
//           <FiUser />
//           <FiShoppingCart />
//         </div>

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

//           {/* ✅ Occasions Dropdown */}
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
//         <div className="hidden md:flex items-center gap-4 text-lg">
//           <FiSearch />
//           <FiUser />
//           <FiShoppingCart />
//         </div>
//       </nav>

//       {/* ✅ Mobile Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden w-full bg-[#f5ebe0] text-black absolute top-[70px] left-0 z-40 shadow-md">
//           <ul className="flex flex-col items-center py-4 space-y-4">
//             <li><Link onClick={() => setMenuOpen(false)} to="/">Home</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/bouquets">Bouquets</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/boxes">Boxes</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/keychain">Keychains</Link></li>
//             <li><Link onClick={() => setMenuOpen(false)} to="/contact">Contact-us</Link></li>

//             {/* ✅ Full Occasions List on Mobile */}
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
//     </header>
//   );
// };

// export default Header;












// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
// import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiLogOut } from "react-icons/fi";
// import Logo from "../../src/assets/FlowerLogo.png";
// import LoginModal from "./LoginModal"; 
// import { Toaster } from "react-hot-toast";
// import axios from "../api/axios";
// import toast from "react-hot-toast";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [user, setUser] = useState(null); // null → not logged in

//   const handleLogin = (email) => {
//     setUser({ email }); // Save user info
//   };

// const handleLogout = async () => {
//   try {
//     await axios.post("/users/logout", {}, { withCredentials: true });
//     toast.success("Logout successful!");
//     setUser(null); // clear user in state
//   } catch (err) {
//     toast.error("Logout failed!");
//   }
// };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <Toaster position="top-right" /> {/* ✅ Toasts */}

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

//         {/* Mobile Icons */}
//         <div className="flex md:hidden items-center gap-4 text-lg">
//           <FiSearch />
//           {user ? (
//             <FiLogOut onClick={handleLogout} className="cursor-pointer" />
//           ) : (
//             <FiUser onClick={() => setShowLogin(true)} className="cursor-pointer" />
//           )}
//           <FiShoppingCart />
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full">
//                   {cart.length}
//                 </span>
//               )}
//         </div>

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
//         <div className="hidden md:flex items-center gap-4 text-lg">
//           <FiSearch />
//           {user ? (
//             <FiLogOut onClick={handleLogout} className="cursor-pointer" />
//           ) : (
//             <FiUser onClick={() => setShowLogin(true)} className="cursor-pointer" />
//           )}
//           <FiShoppingCart />
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
//     </header>
//   );
// };

// export default Header;










import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiShoppingBag, FiUser, FiShoppingCart, FiMenu, FiLogOut } from "react-icons/fi";
import Logo from "../../src/assets/FlowerLogo.png";
import LoginModal from "./LoginModal"; 
import CartDrawer from "../components/Cart/CartDrawer";       // ✅ import cart drawer
import CheckoutModal from "../components/Cart/CheckoutModal"; // ✅ import checkout modal
import { Toaster } from "react-hot-toast";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);     // ✅ cart drawer state
  const [checkoutOpen, setCheckoutOpen] = useState(false); // ✅ checkout modal state
  const [user, setUser] = useState(null); 
  const { cart } = useCart(); 

  const handleLogin = (email) => {
    setUser({ email }); 
  };

  const handleLogout = async () => {
    try {
      await axios.post("/users/logout", {}, { withCredentials: true });
      toast.success("Logout successful!");
      setUser(null); 
    } catch (err) {
      toast.error("Logout failed!");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Toaster position="top-right" /> 

      <nav
        className="
          flex items-center justify-between
          px-4 md:px-8 py-4 md:py-6
          min-h-[70px]
          bg-[#f5ebe0] text-black
          shadow-md
        "
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={Logo}
            alt="House of Flowers Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden"
        >
          <FiMenu size={24} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium relative">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bouquets">Bouquets</Link></li>
          <li><Link to="/boxes">Boxes</Link></li>
          <li><Link to="/keychain">Keychains</Link></li>
          <li><Link to="/custom-orders">Customized</Link></li>
          <li><Link to="/contact">Contact-us</Link></li>

          {/* Occasions Dropdown */}
          <li className="relative group">
            <button className="hover:text-pink-500">Occasions ▾</button>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded mt-2 min-w-[180px] z-50">
              <li><HashLink smooth to="/occasions#birthday" className="block px-4 py-2 hover:bg-pink-50">🎂 Birthday</HashLink></li>
              <li><HashLink smooth to="/occasions#fathers-day" className="block px-4 py-2 hover:bg-pink-50">👔 Father’s Day</HashLink></li>
              <li><HashLink smooth to="/occasions#mothers-day" className="block px-4 py-2 hover:bg-pink-50">🌸 Mother’s Day</HashLink></li>
              <li><HashLink smooth to="/occasions#anniversary" className="block px-4 py-2 hover:bg-pink-50">💍 Anniversary</HashLink></li>
              <li><HashLink smooth to="/occasions#express-love" className="block px-4 py-2 hover:bg-pink-50">❤ Express Love</HashLink></li>
              <li><HashLink smooth to="/occasions#get-well" className="block px-4 py-2 hover:bg-pink-50">💐 Get Well Soon</HashLink></li>
              <li><HashLink smooth to="/occasions#valentines-day" className="block px-4 py-2 hover:bg-pink-50">💕 Valentine’s Day</HashLink></li>
              <li><HashLink smooth to="/occasions#congratulations" className="block px-4 py-2 hover:bg-pink-50">🎉 Congratulations</HashLink></li>
            </ul>
          </li>
        </ul>
{/* Icons (Visible on both desktop + mobile) */}
<div className="flex items-center gap-4 text-lg relative">
  {/* Orders icon */}
  <Link to="/orders">
    <FiShoppingBag className="cursor-pointer" title="Orders" />
  </Link>

  {/* User / Logout */}
  {user ? (
    <FiLogOut onClick={handleLogout} className="cursor-pointer" title="Logout" />
  ) : (
    <FiUser onClick={() => setShowLogin(true)} className="cursor-pointer" title="Login" />
  )}

  {/* Cart icon with badge */}
  <div className="relative cursor-pointer" onClick={() => setDrawerOpen(true)}>
    <FiShoppingCart />
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-full">
        {cart.length}
      </span>
    )}
  </div>
</div>

      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#f5ebe0] text-black absolute top-[70px] left-0 z-40 shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link onClick={() => setMenuOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/bouquets">Bouquets</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/boxes">Boxes</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/keychain">Keychains</Link></li>
            <li><Link onClick={() => setMenuOpen(false)} to="/contact">Contact-us</Link></li>

            {/* Occasions List */}
            <li className="font-semibold">Occasions</li>
            <li><HashLink smooth to="/occasions#birthday" onClick={() => setMenuOpen(false)}>🎂 Birthday</HashLink></li>
            <li><HashLink smooth to="/occasions#fathers-day" onClick={() => setMenuOpen(false)}>👔 Father’s Day</HashLink></li>
            <li><HashLink smooth to="/occasions#mothers-day" onClick={() => setMenuOpen(false)}>🌸 Mother’s Day</HashLink></li>
            <li><HashLink smooth to="/occasions#anniversary" onClick={() => setMenuOpen(false)}>💍 Anniversary</HashLink></li>
            <li><HashLink smooth to="/occasions#express-love" onClick={() => setMenuOpen(false)}>❤ Express Love</HashLink></li>
            <li><HashLink smooth to="/occasions#get-well" onClick={() => setMenuOpen(false)}>💐 Get Well Soon</HashLink></li>
            <li><HashLink smooth to="/occasions#valentines-day" onClick={() => setMenuOpen(false)}>💕 Valentine’s Day</HashLink></li>
            <li><HashLink smooth to="/occasions#congratulations" onClick={() => setMenuOpen(false)}>🎉 Congratulations</HashLink></li>
          </ul>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}

      {/* ✅ Cart Drawer */}
      {/* <CartDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onCheckout={() => {
          setDrawerOpen(false);
          setCheckoutOpen(true);
        }}
      /> */}
      <CartDrawer
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  user={user}
  setUser={setUser}
/>


      {/* ✅ Checkout Modal */}
      {checkoutOpen && (
        <CheckoutModal onClose={() => setCheckoutOpen(false)} />
      )}
    </header>
  );
};

export default Header;
