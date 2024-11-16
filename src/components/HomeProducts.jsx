import React from "react";
import { discoutProducts } from "./products";
import { products } from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const DiscountProducts = () => {
  const discountItems = discoutProducts.filter((product) => product.discount > 0);

  const newItems = products.filter((product) => product.category === "mobile" || product.category === "wireless");

  const sofaItems = products.filter((product) => product.category === "sofa");


  const cartAlert = () => {
    alert("Item added to the cart")
  }

  return (
    <>
    <div className="container mb-5">
      <h2 className="my-4 text-center">Discount Products</h2>
      <div className="row">
        {discountItems.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 d-flex flex-column">
              <div className="img-container border-3 w-100 h-100">
                <img
                  src={product.imgUrl}
                  className="product-img w-50 h-100 p-3"
                  alt={product.productName}
                />
              </div>
              <p className="card-text1 px-3 discount">{product.discount}% Off</p>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.productName}</h5>
                <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                <div className="price d-flex justify-content-between align-items-center">
                  <p className="card-text price">${product.price}</p>
                  <button className="btn rounded-circle" onClick={cartAlert}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container my-5">
      <h2 className="my-4 text-center">New Arrivals</h2>
      <div className="row">
        {newItems.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 d-flex flex-column">
              <div className="img-container border-3 w-100 h-100">
                <img
                  src={product.imgUrl}
                  className="product-img w-50 h-100 p-3"
                  alt={product.productName}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.productName}</h5>
                <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                <div className="price d-flex justify-content-between align-items-center">
                  <p className="card-text price">${product.price}</p>
                  <button className="btn rounded-circle" onClick={cartAlert}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="container my-4">
      <h2 className="my-4 text-center">Best Sales</h2>
      <div className="row">
        {sofaItems.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 d-flex flex-column">
              <div className="img-container border-3 w-100 h-100">
                <img
                  src={product.imgUrl}
                  className="product-img w-50 h-100 p-3"
                  alt={product.productName}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.productName}</h5>
                <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                <div className="price d-flex justify-content-between align-items-center">
                  <p className="card-text price">${product.price}</p>
                  <button className="btn rounded-circle" onClick={cartAlert}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DiscountProducts;
