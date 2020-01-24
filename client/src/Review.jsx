import React from 'react';

const Review = (props) => {
  return (
    <div className="review-container">
      <h4>{props.name}</h4>
      <img src={props.image} />
      <h5 className="date">{props.created_at}</h5>
      <p>{props.body}</p>
    </div>
  )
}

export default Review;