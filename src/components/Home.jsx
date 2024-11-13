import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
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



      <div className="container mt-5">
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


    </>
  );
};

export default Home;
