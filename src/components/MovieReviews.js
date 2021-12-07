// Code MovieReviews Here
import React from "react";

const Review = ({ display_title, headline, summary_short }, id) => {
  return (
    <div key={id}>
      <h3>{display_title}</h3>
      <h4>{headline}</h4>
      <p>{summary_short}</p>
    </div>
  );
};

function MovieReviews({ reviews }) {
  return <div className="review-list">{reviews.map(Review)}</div>;
}

export default MovieReviews;
