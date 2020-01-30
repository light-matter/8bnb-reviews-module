import React from 'react';
import './styles/Review.css';

const Review = (props) => {
  return (
    <div className="ReviewContainer">
      <div className="ReviewHeader">
        <img src={props.image} />
        <div className="NameDate">
          <p className="Name">{props.name}</p>
          <p className="Date">{props.created_at}</p>
        </div>
      </div>
      <p className="ReviewBody">{props.body}</p>
    </div>
  );
};

export default Review;