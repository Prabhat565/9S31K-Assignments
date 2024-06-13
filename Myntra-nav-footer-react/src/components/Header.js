import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      {/* left part: */}

      <div className="left-header-section">
        <img src={require("./myntra.png")} width={100} height={50}></img>
        <p> Men</p>
        <p> Women</p>
        <p> Kids</p>
        <p> Home & Living</p>
        <p>Beauty</p>
        <p>
          Studio<sup>New</sup>
        </p>
      </div>

      {/* right part: */}

      <div className="right-header-section">
        <div className="search-box">
          <img
            src="https://img.icons8.com/?size=100&id=132&format=png&color=000000"
            width={20}
            height={20}
          ></img>
          <input
            type="text"
            placeholder="            Search for products,brands and more"
          ></input>
        </div>
        <div className="rightmost-head-section">
          <div className="profile">
            <img
              src={require("./user_149071.png")}
              width={20}
              height={20}
            ></img>
            <p> profile</p>
          </div>
          <div className="wishlist">
            <img
              src={require("./heart_259424.png")}
              width={20}
              height={20}
            ></img>
            <p> Wishlist</p>
          </div>
          <div className="wishlist">
            <img src={require("./bag.png")} width={20} height={20}></img>
            <p> Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
