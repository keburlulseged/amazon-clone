import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="productInfo">
        <p>The lean startup</p>
        <p className="productPrice">
          <small>
            $<strong>19.99</strong>
          </small>
        </p>
        <div className="productRating">
          <p>⭐</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/417Jh5o2lNL._AC_SL260_.jpg"
        alt=""
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
