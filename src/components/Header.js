import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../context/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from '../firebase';

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazonLogo"
          className="headerLogo"
        />
      </Link>
      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <Link to={!user && "/login"}>
          <div className="headerOption" onClick={handleAuth}>
            <span className="headerOptionLineOne">
              Hello {user?.email || "Guest"}
            </span>
            <span className="headerOptionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className="headerOption">
          <Link to="/orders">
            <span className="headerOptionLineOne">Returns</span>
            <span className="headerOptionLineTwo">& orders</span>
          </Link>
        </div>
        <div className="headerOption">
          <span className="headerOptionLineOne">Your</span>
          <span className="headerOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <ShoppingBasketIcon />
            <span className="headerOptionLineTwo headerBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
