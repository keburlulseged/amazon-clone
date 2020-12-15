import React from "react";
import "./Home.css";
import Product from './Product';

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
          <Product />
          {/*Product*/}
        </div>
        <div className="homeRow">
          {/*Product*/}
          {/*Product*/}
          {/*Product*/}
        </div>
        <div className="homeRow">
          {/*Product*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
