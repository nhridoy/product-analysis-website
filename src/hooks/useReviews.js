import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "data/review.json";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
};

export default useReviews;
