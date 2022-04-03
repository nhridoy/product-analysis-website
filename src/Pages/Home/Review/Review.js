import React from "react";
import { Link } from "react-router-dom";
import SingleReview from "../../../components/SingleReview/SingleReview";
import useReviews from "../../../hooks/useReviews";

const Review = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="p-4 bg-white">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          What Our Customer Says
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          {reviews.slice(0, 3).map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
        <Link
          to="/reviews"
          className="border-4 rounded border-orange-500 font-semibold px-4 py-3"
        >
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Review;
