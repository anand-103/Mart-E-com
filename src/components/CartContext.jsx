// // CartContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load initial cart from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add an item to the cart
//   const addToCart = (product, quantity = 1) => {
//     setCartItems((prevItems) => {
//       const existingProductIndex = prevItems.findIndex((item) => item.id === product.id);

//       if (existingProductIndex !== -1) {
//         const updatedCart = [...prevItems];
//         updatedCart[existingProductIndex].quantity += quantity;
//         return updatedCart;
//       } else {
//         return [...prevItems, { ...product, quantity }];
//       }
//     });
//   };

//   // Function to remove an item from the cart
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   // Function to update the quantity of an item
//   const updateQuantity = (id, action) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === "increment" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;









// CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load initial cart items from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    const updatedCart = [...cartItems];

    if (existingProductIndex !== -1) {
      // Update the quantity of an existing product
      updatedCart[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to the cart
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

