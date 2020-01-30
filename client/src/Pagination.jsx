import React from 'react';
import './styles/Pagination.css';

const Pagination = (props) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.reviews.length / props.reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="Pagination">
      <li className="PaginationArrow"><a href="#"> &lt; </a></li>
      {pageNumbers.map(number => {
        return <li key={number} className="ReviewItem" onClick={props.pageHandler}><a href="#">{number}</a></li>;
      })}
      <li className="PaginationArrow"><a href="#"> &gt; </a></li>
    </ul>
  );
};

export default Pagination;