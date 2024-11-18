import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './cart.css'; // import the styles for cart items

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Clear item from the cart
  const handleClear = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state to trigger re-render
  };

  // Handle quantity change (increment/decrement)
  const handleQuantityChange = (id, action) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        let updatedQuantity = item.quantity || 1;
        if (action === 'increment') updatedQuantity++;
        if (action === 'decrement' && updatedQuantity > 1) updatedQuantity--;
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state to trigger re-render
  };

  return (
    <div className="container my-5">
      <h2 className="my-4 text-center">Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="card rounded d-flex mb-4">
            <button className="clear" onClick={() => handleClear(item.id)}>X</button>
            <div className="layout d-flex">
            <div className="img-containerw-50 h-50 d-flex">
              <img
                src={item.imgUrl}
                className="product-img w-50"
                alt={item.productName}
              />
            </div>
          
            <div className="card-body d-flex">
              <h5 className="card-title">{item.productName}</h5>
          
              <div className="price d-flex justify-content-between align-items-center">
                <div className="priceQuantity d-flex">
                  <p>${item.price} * {item.quantity || 1} item(s)</p>
                  <p className="card-text price">${item.price * (item.quantity || 1)}</p>
                </div>
                <div className="incDec">
                  <button
                    className="increment"
                    onClick={() => handleQuantityChange(item.id, 'increment')}
                  >
                    +
                  </button>
                  <button
                    className="decrement"
                    onClick={() => handleQuantityChange(item.id, 'decrement')}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>          
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      <div className="text-center">
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;






{/* <div className="card d-flex">
    <div className="img">
        <img src="user.png" alt="user" />
    </div>
    <div className="title-body">
        <h3>asdfghj</h3>
        <p>dfghjk</p>
    </div>
</div> */}