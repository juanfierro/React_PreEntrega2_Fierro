import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar has-shadow" style={{ backgroundColor: "#f9f4e8" }}>
      <div className="container">
        {/* Logo / Brand */}
        <div className="navbar-brand">
          <Link
            className="navbar-item has-text-primary is-size-4 has-text-weight-bold"
            to="/"
          >
            MiBouquet
          </Link>
          {/* Navbar toggler for mobile */}
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Navbar links */}
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <Link
              className="navbar-item has-text-weight-medium has-text-grey-dark"
              to="/category/auriculares"
            >
              Auriculares
            </Link>
            <Link
              className="navbar-item has-text-weight-medium has-text-grey-dark"
              to="/category/parlantes"
            >
              Parlantes
            </Link>
            <Link
              className="navbar-item has-text-weight-medium has-text-grey-dark"
              to="/category/notebooks"
            >
              Notebooks
            </Link>
          </div>

          {/* Cart Widget */}
          <div className="navbar-item">
            <CartWidget cartCount={cartCount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
