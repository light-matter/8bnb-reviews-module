import React from 'react';

const Review = (props) => {
  return (
    <div className="review-container">
      <div className="review-header">
        <img src={props.image} />
        <div className="name-date">
          <p className="name">{props.name}</p>
          <p className="date">{props.created_at}</p>
        </div>
      </div>
      <p className="review-body">{props.body}</p>
    </div>
  );
};

export default Review;