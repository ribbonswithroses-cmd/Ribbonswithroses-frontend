

// import React, { useState } from "react";
// import { useCart } from "../../context/CartContext";
// import CheckoutModal from "./CheckoutModal";
// import LoginModal from "../LoginModal"; // ✅ import your login modal
// import toast from "react-hot-toast";

// const CartDrawer = ({ open, onClose, user, setUser }) => {
//   const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//   const [checkoutOpen, setCheckoutOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);

//   const subtotal = cart.reduce(
//     (sum, item) => sum + (item.totalPrice || item.basePrice) * item.quantity,
//     0
//   );

//   if (!open) return null; // ✅ only render when open is true

//   // 🔑 Handle checkout click
//   const handleCheckoutClick = () => {
//     if (!user) {
//       toast.error("Please login first!");
//       setLoginOpen(true); // open login popup
//     } else {
//       setCheckoutOpen(true); // open checkout modal
//     }
//   };

//   return (
//     <>
//       {/* Drawer */}
//       <div className="fixed inset-0 z-40 flex">
//         {/* Overlay */}
//         <div
//           className="flex-1 bg-black bg-opacity-40"
//           onClick={onClose}
//         />

//         {/* Drawer Content */}
//         <div className="w-96 bg-white shadow-xl h-full p-6 flex flex-col">
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>

//           {/* Items */}
//           <div className="flex-1 overflow-y-auto">
//             {cart.length === 0 ? (
//               <p className="text-gray-500">Cart is empty.</p>
//             ) : (
//               cart.map((item, idx) => (
//                 <div key={idx} className="flex gap-3 mb-4 border-b pb-3">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-medium">{item.name}</h3>
//                     {item.selectedSheet && (
//                       <p className="text-xs text-gray-500">
//                         {item.selectedSheet.name} (+${item.selectedSheet.price})
//                       </p>
//                     )}
//                     <div className="flex items-center mt-1">
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="px-2 py-1 bg-gray-200 rounded"
//                       >
//                         -
//                       </button>
//                       <span className="px-3">{item.quantity}</span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="px-2 py-1 bg-gray-200 rounded"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <p className="text-sm font-semibold">
//                       ${item.totalPrice * item.quantity}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-red-500 text-sm"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Footer */}
//           {cart.length > 0 && (
//             <div className="mt-4 border-t pt-4">
//               <div className="flex justify-between text-lg font-semibold mb-4">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <button
//                 onClick={handleCheckoutClick} // ✅ check login first
//                 className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
//               >
//                 Proceed to Checkout
//               </button>
//               <button
//                 onClick={clearCart}
//                 className="w-full mt-2 text-sm text-gray-500 underline"
//               >
//                 Clear Cart
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Checkout Modal */}
//       {checkoutOpen && <CheckoutModal onClose={() => setCheckoutOpen(false)} />}

//       {/* Login Modal */}
//       {loginOpen && (
//         <LoginModal
//           onClose={() => setLoginOpen(false)}
//           onLogin={(userData) => {
//             setUser(userData); // ✅ update parent state
//             setLoginOpen(false);
//             setCheckoutOpen(true); // ✅ auto-open checkout after login
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default CartDrawer;













import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import CheckoutModal from "./CheckoutModal";
import LoginModal from "../LoginModal";
import toast from "react-hot-toast";

const CartDrawer = ({ open, onClose, user, setUser }) => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

const subtotal = cart.reduce(
  (sum, item) =>
    sum +
    ((item.totalPrice ?? item.basePrice ?? item.price ?? 0) * item.quantity),
  0
);



  if (!open) return null;

  const handleCheckoutClick = () => {
    if (!user) {
      toast.error("Please login first!");
      setLoginOpen(true);
    } else {
      setCheckoutOpen(true);
    }
  };

  return (
    <>
      {/* Overlay + Drawer */}
      <div className="fixed inset-0 z-40 flex">
        {/* Overlay */}
        <div
          className="flex-1 bg-black bg-opacity-40"
          onClick={onClose}
        />

        {/* Drawer Content */}
        <div className="w-96 bg-white shadow-xl h-full p-6 flex flex-col relative">
          {/* ❌ Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            aria-label="Close cart"
          >
            ×
          </button>

          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty.</p>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} className="flex gap-3 mb-4 border-b pb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {item.selectedSheet && (
                      <p className="text-xs text-gray-500">
                        {item.selectedSheet.name} (+${item.selectedSheet.price})
                      </p>
                    )}
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-semibold">
  ${((item.totalPrice ?? item.basePrice ?? item.price ?? 0) * item.quantity).toFixed(2)}
</p>

                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold mb-4">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckoutClick}
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full mt-2 text-sm text-gray-500 underline"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {checkoutOpen && (
        <CheckoutModal onClose={() => setCheckoutOpen(false)} />
      )}

      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onLogin={(userData) => {
            setUser(userData);
            setLoginOpen(false);
            setCheckoutOpen(true);
          }}
        />
      )}
    </>
  );
};

export default CartDrawer;
