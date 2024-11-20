// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart items from localStorage when the app starts
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Save cart items to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Function to add item to cart
//   const addToCart = (product, quantity = 1) => {
//     const existingProduct = cartItems.find((item) => item.id === product.id);
  
//     if (existingProduct) {
//       // Update the quantity if the product is already in the cart
//       const updatedCart = cartItems.map((item) =>
//         item.id === product.id
//           ? { ...item, quantity: (item.quantity || 1) + quantity }
//           : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       // Add the new product to the cart
//       setCartItems([...cartItems, { ...product, quantity }]);
//     }
//   };
  

//   // Function to remove item from cart
//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   // Function to get total cart count
//   const cartCount = cartItems.reduce((count, item) => count + (item.quantity || 1), 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
