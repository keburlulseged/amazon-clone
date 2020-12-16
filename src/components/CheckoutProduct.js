import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, image, title, price, rating}) {
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProductImage"
        src={image}
      />

      <div className="checkoutProductInfo">
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))};
        </div>
        <div>
          <button>Remove from cart</button>
        </div>
      </div>

    </div>
  )
}

export default CheckoutProduct

