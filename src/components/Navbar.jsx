import React from "react";
import "./navbar.css";

const Navbar = ({ totalItems }) => {
  return (
    <div className="navbarDiv">
      <h2> Ecom Mini</h2>
      <p className="cart"> Basket {totalItems} </p>
    </div>
  );
};

export default Navbar;
