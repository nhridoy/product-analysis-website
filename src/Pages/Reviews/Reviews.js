import React from "react";
import SingleReview from "../../components/SingleReview/SingleReview";
import useReviews from "../../hooks/useReviews";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className="p-4 bg-white">
      <div className="container mx-auto flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          What Our Customer Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review) => (
            <SingleReview key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
