import React from 'react';
import Pagination from './Pagination.jsx';

const ReviewFooter = (props) => {
  return (
    <div>
      <Pagination
        reviews={props.reviews}
        reviewsPerPage={props.reviewsPerPage}
        pageHandler={props.pageHandler}
      />
      <p>This host has 23 reviews for other properties.</p>
      <button className="review-footer-button">View Other Reviews</button>
    </div>
  );
};

export default ReviewFooter;