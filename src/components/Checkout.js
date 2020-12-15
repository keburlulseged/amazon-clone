import React from 'react'
import "./Checkout.css"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutBannerAd">
        <img
          className="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
      </div>
      <div className="checkoutBody">
        <div className="checkoutLeft">
          <h2 className="checkoutTitle">
            Shopping Cart
            {/*BasketItem */}
            {/*BasketItem */}
            {/*BasketItem */}
          </h2>
        </div>

        <div className="checkoutRight">
          <h2>Subtotal</h2>
        </div>
      </div>
    </div>
  )
}

export default Checkout

