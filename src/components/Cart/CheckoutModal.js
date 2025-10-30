// import React, { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";

// const CheckoutModal = ({ onClose }) => {
//   const { cart, clearCart } = useCart();
//   const [step, setStep] = useState(1); // 1 = form, 2 = delivery
//   const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
//   const [delivery, setDelivery] = useState("pickup");

//   // ✅ Load saved form & delivery option from sessionStorage
//   useEffect(() => {
//     const savedForm = sessionStorage.getItem("checkoutForm");
//     const savedDelivery = sessionStorage.getItem("checkoutDelivery");
//     if (savedForm) setForm(JSON.parse(savedForm));
//     if (savedDelivery) setDelivery(savedDelivery);
//   }, []);

//   // ✅ Save form changes to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("checkoutForm", JSON.stringify(form));
//   }, [form]);

//   // ✅ Save delivery option to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("checkoutDelivery", delivery);
//   }, [delivery]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleConfirm = () => {
//     console.log("Order submitted:", { form, delivery, cart });

//     // ✅ Clear cart & checkout storage
//     clearCart();
//     sessionStorage.removeItem("checkoutForm");
//     sessionStorage.removeItem("checkoutDelivery");

//     onClose();
//     alert("✅ Order placed successfully!");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
//         <h2 className="text-xl font-bold mb-4">Checkout</h2>

//         {step === 1 && (
//           <div className="space-y-3">
//             <input
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <input
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <input
//               name="phone"
//               placeholder="Phone"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <textarea
//               name="address"
//               placeholder="Address"
//               value={form.address}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <button
//               onClick={() => setStep(2)}
//               className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700"
//             >
//               Next: Delivery
//             </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block font-medium">Delivery Option</label>
//               <select
//                 value={delivery}
//                 onChange={(e) => setDelivery(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="pickup">Store Pickup</option>
//                 <option value="delivery">Home Delivery</option>
//               </select>
//             </div>
//             <button
//               onClick={handleConfirm}
//               className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
//             >
//               Confirm Order
//             </button>
//             <button
//               onClick={() => setStep(1)}
//               className="w-full text-sm text-gray-500 underline"
//             >
//               Back
//             </button>
//           </div>
//         )}

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutModal;




// import React, { useState, useEffect } from "react";
// import { useCart } from "../../context/CartContext";
// import axios from "../../api/axios"
// const usStates = [
//   "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
//   "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
//   "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
//   "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
//   "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
//   "New Hampshire", "New Jersey", "New Mexico", "New York",
//   "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
//   "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
//   "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
//   "West Virginia", "Wisconsin", "Wyoming"
// ];

// const CheckoutModal = ({ onClose }) => {
//   const { cart, clearCart } = useCart();
//   const [step, setStep] = useState(1); // 1 = form, 2 = delivery

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address1: "",
//     address2: "",
//     city: "",
//     state: "",
//     postalCode: "",
//   });
// // Add this helper function
// const isFormValid = () => {
//   return (
//     form.firstName.trim() &&
//     form.lastName.trim() &&
//     form.email.trim() &&
//     form.phone.trim() &&
//     form.address1.trim() &&
//     form.city.trim() &&
//     form.state.trim() &&
//     form.postalCode.trim()
//   );
// };

//   const [delivery, setDelivery] = useState("pickup");

//   // ✅ Load saved form & delivery option from sessionStorage
//   useEffect(() => {
//     const savedForm = sessionStorage.getItem("checkoutForm");
//     const savedDelivery = sessionStorage.getItem("checkoutDelivery");
//     if (savedForm) setForm(JSON.parse(savedForm));
//     if (savedDelivery) setDelivery(savedDelivery);
//   }, []);

//   // ✅ Save form changes to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("checkoutForm", JSON.stringify(form));
//   }, [form]);

//   // ✅ Save delivery option to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem("checkoutDelivery", delivery);
//   }, [delivery]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

// const handleConfirm = async () => {
//   try {
//     const token = sessionStorage.getItem("token"); // 👈 make sure you store token on login
//     if (!token) {
//       alert("⚠️ Please login first!");
//       return;
//     }

//     const res = await axios.post(
//       "/orders", 
//       { form, delivery, cart }, 
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     console.log("✅ Order placed:", res.data);

//     // ✅ Clear cart & checkout storage
//     clearCart();
//     sessionStorage.removeItem("checkoutForm");
//     sessionStorage.removeItem("checkoutDelivery");

//     onClose();
//     alert("✅ Order placed successfully!");
//   } catch (err) {
//     console.error("❌ Failed to place order:", err);
//     alert("❌ Failed to place order. Please try again.");
//   }
// };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
//         <h2 className="text-xl font-bold mb-4">Checkout</h2>

//         {step === 1 && (
//           <div className="space-y-3">
//             {/* First + Last Name */}
//             <div className="flex gap-3">
//               <input
//                 name="firstName"
//                 placeholder="First Name"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className="flex-1 border p-2 rounded"
//                 required
//               />
//               <input
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className="flex-1 border p-2 rounded"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <input
//               name="email"
//               type="email"
//               placeholder="Email (must match your login email)"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />

//             {/* Phone */}
//             <input
//               name="phone"
//               placeholder="Phone"
//               value={form.phone}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />

//             {/* Address Line 1 */}
//             <input
//               name="address1"
//               placeholder="Street Address"
//               value={form.address1}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />

//             {/* Address Line 2 */}
//             <input
//               name="address2"
//               placeholder="Apartment, Suite, Unit (optional)"
//               value={form.address2}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />

//             {/* City */}
//             <input
//               name="city"
//               placeholder="City"
//               value={form.city}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               required
//             />

//             {/* State + ZIP */}
//             <div className="flex gap-3">
//               <select
//                 name="state"
//                 value={form.state}
//                 onChange={handleChange}
//                 className="flex-1 border p-2 rounded"
//                 required
//               >
//                 <option value="">Select State</option>
//                 {usStates.map((s) => (
//                   <option key={s} value={s}>
//                     {s}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 name="postalCode"
//                 placeholder="ZIP Code"
//                 value={form.postalCode}
//                 onChange={handleChange}
//                 className="w-32 border p-2 rounded"
//                 required
//               />
//             </div>

//            <button
//   onClick={() => isFormValid() && setStep(2)}
//   disabled={!isFormValid()}
//   className={`w-full py-3 rounded-lg ${
//     isFormValid()
//       ? "bg-pink-600 text-white hover:bg-pink-700"
//       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//   }`}
// >
//   Next: Delivery
// </button>
//           </div>
//         )}

//         {step === 2 && (
//           <div className="space-y-4">
//             <div>
//               <label className="block font-medium">Delivery Option</label>
//               <select
//                 value={delivery}
//                 onChange={(e) => setDelivery(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="pickup">Store Pickup</option>
//                 <option value="delivery">Home Delivery</option>
//               </select>
//             </div>
//             <button
//               onClick={handleConfirm}
//               className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
//             >
//               Confirm Order
//             </button>
//             <button
//               onClick={() => setStep(1)}
//               className="w-full text-sm text-gray-500 underline"
//             >
//               Back
//             </button>
//           </div>
//         )}

//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutModal;




import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import axios from "../../api/axios";
import toast from "react-hot-toast";

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
];

const CheckoutModal = ({ onClose }) => {
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [delivery, setDelivery] = useState("pickup");
  const [total, setTotal] = useState(0);

  // ✅ Calculate subtotal
  useEffect(() => {
    const subtotal = cart.reduce(
      (sum, item) =>
        sum +
        ((item.totalPrice ?? item.basePrice ?? item.price ?? 0) * item.quantity),
      0
    );
    setTotal(subtotal);
  }, [cart]);

  // ✅ Load saved form & delivery option
  useEffect(() => {
    const savedForm = sessionStorage.getItem("checkoutForm");
    const savedDelivery = sessionStorage.getItem("checkoutDelivery");
    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedDelivery) setDelivery(savedDelivery);
  }, []);

  // ✅ Save form & delivery
  useEffect(() => {
    sessionStorage.setItem("checkoutForm", JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    sessionStorage.setItem("checkoutDelivery", delivery);
  }, [delivery]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.address1.trim() &&
      form.city.trim() &&
      form.state.trim() &&
      form.postalCode.trim()
    );
  };

  // ✅ Handle delivery change with toast + confirmation
  const handleDeliveryChange = (e) => {
    const value = e.target.value;

    if (value === "delivery") {
      toast(
        (t) => (
          <span>
            🚚 Home Delivery selected. <br />
            <b>$10 delivery charge</b> will be added to your total.
            <div className="mt-3 flex gap-2 justify-end">
              <button
                onClick={() => {
                  setDelivery("delivery");
                  // setTotal((prev) => prev + 10);
                  toast.dismiss(t.id);
                  toast.success("✅ Delivery charge added!");
                }}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm"
              >
                OK
              </button>
              <button
                onClick={() => {
                  setDelivery("pickup");
                  toast.dismiss(t.id);
                  toast("🛍️ Switched back to Store Pickup", {
                    icon: "🏪",
                  });
                }}
                className="bg-gray-200 px-3 py-1 rounded text-sm"
              >
                Cancel
              </button>
            </div>
          </span>
        ),
        { duration: 8000 }
      );
    } else {
      setDelivery("pickup");
      // setTotal((prev) => (prev > 10 ? prev - 10 : prev));
      toast("🏪 Store Pickup selected — no delivery charges.", {
        icon: "✅",
      });
    }
  };

 const handleConfirm = async () => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("⚠️ Please login first!");
      return;
    }

    // 👇 Make sure delivery charge is added before sending
    const finalTotal = delivery === "delivery" ? total + 10 : total;

    const res = await axios.post(
      "/orders",
      { form, delivery, cart, total: finalTotal },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("✅ Order placed:", res.data);

    clearCart();
    sessionStorage.removeItem("checkoutForm");
    sessionStorage.removeItem("checkoutDelivery");
    onClose();

    toast.success("🎉 Order placed successfully!");
  } catch (err) {
    console.error("❌ Failed to place order:", err);
    toast.error("❌ Failed to place order. Please try again.");
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        {/* STEP 1 — FORM */}
        {step === 1 && (
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                className="flex-1 border p-2 rounded"
                required
              />
              <input
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                className="flex-1 border p-2 rounded"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email (must match your login email)"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <input
              name="address1"
              placeholder="Street Address"
              value={form.address1}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <input
              name="address2"
              placeholder="Apartment, Suite, Unit (optional)"
              value={form.address2}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />

            <div className="flex gap-3">
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className="flex-1 border p-2 rounded"
                required
              >
                <option value="">Select State</option>
                {usStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <input
                name="postalCode"
                placeholder="ZIP Code"
                value={form.postalCode}
                onChange={handleChange}
                className="w-32 border p-2 rounded"
                required
              />
            </div>

            <button
              onClick={() => isFormValid() && setStep(2)}
              disabled={!isFormValid()}
              className={`w-full py-3 rounded-lg ${
                isFormValid()
                  ? "bg-pink-600 text-white hover:bg-pink-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Next: Delivery
            </button>
          </div>
        )}

        {/* STEP 2 — DELIVERY */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Delivery Option</label>
              <select
                value={delivery}
                onChange={handleDeliveryChange}
                className="w-full border p-2 rounded"
              >
                <option value="pickup">Store Pickup</option>
                <option value="delivery">Home Delivery</option>
              </select>
            </div>

            <div className="text-lg font-semibold text-gray-800 text-right">
  Total: ${(delivery === "delivery" ? total + 10 : total).toFixed(2)}
</div>


            <button
              onClick={handleConfirm}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Confirm Order
            </button>
            <button
              onClick={() => setStep(1)}
              className="w-full text-sm text-gray-500 underline"
            >
              Back
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
