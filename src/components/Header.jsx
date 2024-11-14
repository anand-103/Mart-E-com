import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container-fluid px-5">
          <img src="achieversIT.png" alt="icon" className="navbar-brand" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item px-3">
                <a className="nav-link fw-bold" href="#home">Home</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fw-bold" href="#about">Shop</a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link fw-bold" href="#cart">Cart</a>
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <img className='nav-link' src="user.png" alt="User" id="user" />
              </li>
              <li className="nav-item px-3 d-flex align-items-center">
                <div className="cart">
                  <img className="nav-link" src="grocery-store.png" alt="grocery" id="grocery" />
                  <button className='cart-count'>0</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
