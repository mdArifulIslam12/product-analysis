import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="header-container">
        <div className="container ">
          <div className="row home-row p-5">
            <div className="col-lg-6 sound-detail">
              <div className="row">
                <div className="col-lg-7">
                  <h1>New level of Sound Experience.</h1>
                </div>
              </div>
              <p>
                Put it on repeat and stay unplugged all day thanks to up to 40
                hours of battery life. You can keep track of the batter with the
                illuminated LED fuel gauge located on the headphone itself.
              </p>
              <button>Live Demo</button>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://www.nicepng.com/png/full/252-2528771_connect-pro-pink-headphones-png.png"
                alt=""
              />
              {/* https://www.themezaa.com/html/leadgen/demo/product/images/bg-image/agency-slider-03.jpg */}
            </div>
          </div>
        </div>
      </div>
      <div className="customer-review-container mt-5 pt-5">
        <h2 className="text-center pb-5">Customer Review (3)</h2>
        <CustomerReview></CustomerReview>
      </div>
    </div>
  );
};

export default Home;
