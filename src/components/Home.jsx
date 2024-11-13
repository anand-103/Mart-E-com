import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-content d-flex justify-content-center align-items-center">
          <div className="text px-4">
            <h1 className='py-3'>50% Off For Your First Shopping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
            <button className='btn btn-primary py-2'>Visit Collection</button>
          </div>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img className="carousel-img" src="phone-08.png" alt="First slide" />
          </div>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="carousel-content d-flex justify-content-center align-items-center">
          <div className="text px-4">
            <h1 className='py-3'>50% Off For Your First Shopping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
            <button className='btn btn-primary py-2'>Visit Collection</button>
          </div>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img className="carousel-img" src="wireless-01.png" alt="Second slide" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-content d-flex justify-content-center align-items-center">
          <div className="text px-4">
            <h1 className='py-3'>50% Off For Your First Shopping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
            <button className='btn btn-primary py-2'>Visit Collection</button>
          </div>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img className="carousel-img" src="watch-07.png" alt="Third slide" />
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-content d-flex justify-content-center align-items-center">
          <div className="text px-4">
            <h1 className='py-3'>50% Off For Your First Shopping</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab ut at, maxime perferendis cum numquam temporibus labore mollitia hic!</p>
            <button className='btn btn-primary py-2'>Visit Collection</button>
          </div>
          <div className="image-container d-flex justify-content-center align-items-center">
            <img className="carousel-img" src="hero-img.png" alt="Fourth slide" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
