// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // ✅ Load cart from sessionStorage when app starts
//   useEffect(() => {
//     const storedCart = sessionStorage.getItem("cart");
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // ✅ Save cart to sessionStorage whenever it changes
//   useEffect(() => {
//     sessionStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       // ✅ Match item not just by product ID, but also by sheet (if selected)
//       const existingItem = prevCart.find(
//         (i) =>
//           i.id === item.id &&
//           (i.selectedSheet?.id || null) === (item.selectedSheet?.id || null)
//       );

//       if (existingItem) {
//         return prevCart.map((i) =>
//           i.id === item.id &&
//           (i.selectedSheet?.id || null) === (item.selectedSheet?.id || null)
//             ? { ...i, quantity: i.quantity + item.quantity }
//             : i
//         );
//       }
//       return [...prevCart, item];
//     });
//   };

//   const removeFromCart = (id, sheetId = null) => {
//     setCart((prevCart) =>
//       prevCart.filter(
//         (i) => !(i.id === id && (i.selectedSheet?.id || null) === (sheetId || null))
//       )
//     );
//   };

//   const updateQuantity = (id, newQuantity, sheetId = null) => {
//     if (newQuantity <= 0) return removeFromCart(id, sheetId);

//     setCart((prevCart) =>
//       prevCart.map((i) =>
//         i.id === id && (i.selectedSheet?.id || null) === (sheetId || null)
//           ? { ...i, quantity: newQuantity }
//           : i
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//     sessionStorage.removeItem("cart"); // ✅ clear session storage also
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };






import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ✅ Initialize directly from sessionStorage
  const [cart, setCart] = useState(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // ✅ Keep sessionStorage in sync
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (i) =>
          i.id === item.id &&
          (i.selectedSheet?.id || null) === (item.selectedSheet?.id || null)
      );

      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id &&
          (i.selectedSheet?.id || null) === (item.selectedSheet?.id || null)
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id, sheetId = null) => {
    setCart((prevCart) =>
      prevCart.filter(
        (i) => !(i.id === id && (i.selectedSheet?.id || null) === (sheetId || null))
      )
    );
  };

  const updateQuantity = (id, newQuantity, sheetId = null) => {
    if (newQuantity <= 0) return removeFromCart(id, sheetId);

    setCart((prevCart) =>
      prevCart.map((i) =>
        i.id === id && (i.selectedSheet?.id || null) === (sheetId || null)
          ? { ...i, quantity: newQuantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("cart"); // ✅ clear session storage also
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
