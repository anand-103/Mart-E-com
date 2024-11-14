import React from "react";
import { discoutProducts } from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import './product.css'

const DiscountProducts = () => {
  const discountItems = discoutProducts.filter(product => product.discount > 0);

  return (
    <div className="container">
      <h2 className="my-4">Discount Products</h2>
      <div className="row">
        {discountItems.map((product) => (
          <div key={product.id} className="col-md-4 mb-4 d-flex">
            <div className="card h-100 w-100">
              <img src={product.imgUrl} className="card-img-top" alt={product.productName} id="disImg" />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Discount: {product.discount}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
