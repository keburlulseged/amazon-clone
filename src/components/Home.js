import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODc1YjFhOTgt/ODc1YjFhOTgt-OTg3MDgxZGMt-w1500._CB413240536_.jpg"
          alt=""
        />

        <div className="homeRow">
          <Product
            title="Ergonomic Office Chair PC Gaming Chair Cheap Desk Chair PU Leather Executive Rolling Swivel Chair Computer Lumbar Support for Women, Men"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61WUnfXn1GL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Nurxiovo 3 in 1 Stand Mixer 850W 6 Speed Tilt-Head Kitchen Mixer with 6.5QT Mixer with Stainless Steel Bowl, Dough Hook Whisk Beater, Multifunction Standing Mixers, Meat Blender and Juice Extracter Black"
            price={127.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71oNeWl7JXL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="homeRow">
          <Product
            id="4903850"
            title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Casio Men's W800H-1AV Classic Sport Watch with Black Band"
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81saSGJ7gRL._AC_UY606_.jpg"
            rating={5}
          />
          <Product
            id="325435435"
            title="Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition
            "
            price={36.74}
            image="https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg"
            rating={5}
          />

        </div>
        <div className="homeRow">
          <Product
            id=""
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
