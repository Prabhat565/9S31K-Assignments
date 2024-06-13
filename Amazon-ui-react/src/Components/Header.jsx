import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="top">
        <div className="logo">Amazon</div>
        <div className="location">Update location</div>
        <div className="search">
          <input type="text" placeholder="Search Amazon.in" />
        </div>
        <div className="language">EN</div>
        <div className="acc">Account & Lists</div>
        <div className="orders">Returns & Orders</div>
        <div className="cart">cart</div>
      </div>
    </>
  );
};

export default Header;
