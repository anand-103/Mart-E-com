import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { discoutProducts } from "./products";
import { products } from "./products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

const Home = () => {
  const discountItems = discoutProducts.filter((product) => product.discount > 0);

  const newItems = products.filter((product) => product.category === "mobile" || product.category === "wireless");

  const sofaItems = products.filter((product) => product.category === "sofa");

  // Function to add product to cart (local storage)
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = cart.some(item => item.id === product.id);

    if (!isProductInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.productName} added to the cart!`);
    } else {
      alert(`${product.productName} is already in the cart.`);
    }
  };

  return (
    <>
      <Carousel controls={false} indicators={false} interval={1000}>
        <Carousel.Item>
          <div className="carousel-content mb-5 d-flex flex-column flex-md-row justify-content-space-around align-items-center p-3">
            <div className="text-container p-2 text-md-start text-center">
              <h1 className="carousel-title">50% Off For Your First Shopping</h1>
              <p className="carousel-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
              <button className="btn btn-primary mt-2 carousel-button">Visit Collection</button>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center">
              <img className="carousel-img" src="phone-08.png" alt="First slide" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content mb-5 d-flex flex-column flex-md-row justify-content-around align-items-center p-3">
            <div className="text-container p-2 text-md-start text-center">
              <h1 className="carousel-title">50% Off For Your First Shopping</h1>
              <p className="carousel-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
              <button className="btn btn-primary mt-2 carousel-button">Visit Collection</button>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center">
              <img className="carousel-img" src="wireless-01.png" alt="Second slide" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content mb-5 d-flex flex-column flex-md-row justify-content-around align-items-center p-3">
            <div className="text-container p-2 text-md-start text-center">
              <h1 className="carousel-title">50% Off For Your First Shopping</h1>
              <p className="carousel-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
              <button className="btn btn-primary mt-2 carousel-button">Visit Collection</button>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center">
              <img className="carousel-img" src="watch-07.png" alt="Third slide" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-content mb-5 d-flex flex-column flex-md-row justify-content-around align-items-center p-3">
            <div className="text-container p-2 text-md-start text-center">
              <h1 className="carousel-title">50% Off For Your First Shopping</h1>
              <p className="carousel-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
              <button className="btn btn-primary mt-2 carousel-button">Visit Collection</button>
            </div>
            <div className="image-container d-flex justify-content-center align-items-center">
              <img className="carousel-img" src="hero-img.png" alt="Fourth slide" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>



      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card bg-lightpink text-center p-3">
              <img className="rounded-circle border border-white p-2" src="front-car.png" alt="Free Shipping" />
              <h4 className="mt-3">Free Shipping</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card bg-lightblue text-center p-3">
              <img className="rounded-circle border border-white p-2" src="secure-payment.png" alt="Safe Payment" />
              <h4 className="mt-3">Safe Payment</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card bg-lightgreen text-center p-3">
              <img className="rounded-circle border border-white p-2" src="protection.png" alt="Secure Payment" />
              <h4 className="mt-3">Secure Payment</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card bg-lightblue text-center p-3">
              <img className="rounded-circle border border-white p-2" src="talk.png" alt="Safe Guarantee" />
              <h4 className="mt-3">Safe Guarantee</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="my-4 mb-5 text-center">Discount Products</h2>
        <div className="row justify-content-center">
          {discountItems.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card rounded h-100 d-flex flex-column">
                <div className="img-container border-3 w-100 h-100">
                  <img
                    src={product.imgUrl}
                    className="product-img w-50 h-100 p-3"
                    alt={product.productName}
                  />
                </div>
                <p className="card-text1 px-3 discount">{product.discount}% Off</p>
                <div className="heart">&#129293;</div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                  <div className="price d-flex justify-content-between align-items-center">
                    <p className="card-text price">${product.price}</p>
                    <button className="btn rounded-circle" onClick={() => addToCart(product)}>+</button>
                  </div>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-5">
        <h2 className="my-4 mb-5 text-center">New Arrivals</h2>
        <div className="row justify-content-center">
          {newItems.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card rounded h-100 d-flex flex-column">
                <div className="img-container border-3 w-100 h-100">
                  <img
                    src={product.imgUrl}
                    className="product-img w-50 h-100 p-3"
                    alt={product.productName}
                  />
                </div>
                <div className="heart">&#129293;</div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                  <div className="price d-flex justify-content-between align-items-center">
                    <p className="card-text price">${product.price}</p>
                    <button className="btn rounded-circle" onClick={() => addToCart(product)}>+</button>
                  </div>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="container my-4 mb-5">
        <h2 className="my-4 mb-5 text-center">Best Sales</h2>
        <div className="row justify-content-center">
          {sofaItems.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card rounded h-100 d-flex flex-column">
                <div className="img-container border-3 w-100 h-100">
                  <img
                    src={product.imgUrl}
                    className="product-img w-50 h-100 p-3"
                    alt={product.productName}
                  />
                </div>
                <div className="heart">&#129293;</div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="star pt-2 pb-3">⭐⭐⭐⭐⭐</p>
                  <div className="price d-flex justify-content-between align-items-center">
                    <p className="card-text price">${product.price}</p>
                    <button className="btn rounded-circle" onClick={() => addToCart(product)}>+</button>
                  </div>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
