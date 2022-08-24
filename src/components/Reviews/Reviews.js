import React from "react";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import useReview from "../../hooks/useReview";
import "./Reviews.css";

const Reviews = () => {
  const [datas, setDatas] = useReview();
  return (
    <div className="container">
      <div className="customerReview mt-5">
        {datas.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
