import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleReview = ({ review }) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-3">
      <h3 className="font-semibold text-gray-700">{review.username}</h3>
      <div className="flex">
        {new Array(review.rating).fill(0).map((_, i) => (
          <AiFillStar key={i} className="text-orange-500" />
        ))}
        {new Array(5 - review.rating).fill(0).map((_, i) => (
          <AiOutlineStar key={i} className="text-gray-700" />
        ))}
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default SingleReview;
