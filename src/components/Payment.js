import React from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "../context/StateProvider";
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymentItems">
          {/* <CheckoutProduct
            id={1}
            title="Ergonomic Office Chair PC Gaming Chair Cheap Desk Chair PU Leather Executive Rolling Swivel Chair Computer Lumbar Support for Women, Men"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61WUnfXn1GL._AC_SL1500_.jpg"
            rating={5}
          />
          <CheckoutProduct
            id={2}
            title="Ergonomic Office Chair PC Gaming Chair Cheap Desk Chair PU Leather Executive Rolling Swivel Chair Computer Lumbar Support for Women, Men"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61WUnfXn1GL._AC_SL1500_.jpg"
            rating={5}
          />
          <CheckoutProduct
            id={3}
            title="Ergonomic Office Chair PC Gaming Chair Cheap Desk Chair PU Leather Executive Rolling Swivel Chair Computer Lumbar Support for Women, Men"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61WUnfXn1GL._AC_SL1500_.jpg"
            rating={5}
          /> */}
             {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))} 
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">

        {/**Payment section - strip magic */}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment;

