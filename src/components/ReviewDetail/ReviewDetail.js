import React from "react";
import Ratings from "../Ratings/Ratings";
import "./ReviewDetail.css";
const ReviewDetail = (props) => {
  const { name, img, rating, detail, id } = props.review;
  return (
    <div className="cart-container-review g-0  row">
      <div className="col-lg-4">
        <img src={img} alt="" />
      </div>
      <div className="col-lg-8 ">
        <h2>{name}</h2>
        <p>{detail}</p>
        <p>
          Rating: <Ratings key={id} rating={rating}></Ratings> {rating}
        </p>
      </div>
    </div>
  );
};

export default ReviewDetail;
