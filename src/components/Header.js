import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="headerLogo"
      />
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
      </div>

      <div className="headerNav">
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello</span>
          <span className="headerOptionLineTwo">SignIn</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Returns</span>
          <span className="headerOptionLineTwo">& orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Hello</span>
          <span className="headerOptionLineTwo">SignIn</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
