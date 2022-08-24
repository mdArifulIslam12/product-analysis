import React from "react";
import useReview from "../../hooks/useReview";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
import { Link } from "react-router-dom";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [datas, setDatas] = useReview();
  const ReviewDetails = datas.slice(0, 3);
  return (
    <div className="container ">
      <div className="customerReview">
        {ReviewDetails.map((review) => (
          <ReviewDetail key={review.id} review={review}></ReviewDetail>
        ))}
      </div>

      <div className="text-center mt-5 mb-5 pb-5 pt-3">
        <button>
          <Link to="/reviews" className="link-btn">
            See All Review
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CustomerReview;
