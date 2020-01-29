import React from 'react';

const Pagination = (props) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.reviews.length / props.reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className="pagination-arrow"><a href="#"> &lt; </a></li>
      {pageNumbers.map(number => {
        return <li key={number} className="review-item" onClick={props.pageHandler}><a href="#">{number}</a></li>;
      })}
      <li className="pagination-arrow"><a href="#"> &gt; </a></li>
    </ul>
  );
};

export default Pagination;