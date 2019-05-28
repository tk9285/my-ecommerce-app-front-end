import React from "react";

// import Search from "./Search";

const Navbar = props => (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="http://placehold.it/150x50?text=Logo" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/checkout">
                Checkout
              </a>
            </li>
            <li>
              <a className="glyphicon glyphicon-shopping-cart">ss</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </React.Fragment>
);

export default Navbar;
