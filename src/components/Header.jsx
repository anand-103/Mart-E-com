import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container-fluid px-5">
        <img src="achieversIT.png" alt="icon" />

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className="nav-link fw-bold" href="#home">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link fw-bold" href="#about">Shop</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link fw-bold" href="#services">Cart</a>
            </li>
            <li className="nav-item px-3">
              <img className='nav-link fw-bold' src="user.png" alt="user" id='user' />
            </li>
            <li className="nav-item px-3">
                <div className="cart">
                  <img className="nav-link fw-bold" src="grocery-store.png" alt="grocery" id='grocery' />
                  <button className='cart-count'>0</button>
                </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Header
