import React from "react";
import { discoutProducts } from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const DiscountProducts = () => {
  const discountItems = discoutProducts.filter((product) => product.discount > 0);

  return (
    <div className="container">
      <h2 className="my-4 text-center">Discount Products</h2>
      <div className="row">
        {discountItems.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card h-100 d-flex flex-column">
              <div className="img-container">
                <img
                  src={product.imgUrl}
                  className="product-img"
                  alt={product.productName}
                />
              </div>
              <p className="card-text1 px-3 discount">{product.discount}% Off</p>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.productName}</h5>
                <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                <div className="price d-flex justify-content-between align-items-center">
                  <p className="card-text price">${product.price}</p>
                  <button className="btn rounded-circle">+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
