import React from "react";
import "./Product.css";
import {useStateValue} from '../context/StateProvider'

function Product({ id, title, image, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispact the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>
            $<strong>{price}</strong>
          </small>
        </p>
        <div className="productRating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
