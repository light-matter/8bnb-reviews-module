import React from 'react';

const Review = (props) => {
  return (
    <div className="review-container">
      <h4>Firstname</h4>
      <h5 className="date">Time-ago review left</h5>
      <p>This is a blub of text the user has left to explain how they felt about their stay at this bnb.</p>
    </div>
  );
};

export default Review;