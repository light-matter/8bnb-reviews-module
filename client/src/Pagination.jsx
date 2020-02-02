import React from 'react';
import './styles/Pagination.css';

const Pagination = (props) => {

  const pageNumbers = [];
  const totalPages = Math.ceil(props.reviews.length / props.reviewsPerPage)

  if (totalPages < 6) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else if (totalPages >= 6) {
    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push('...', totalPages);
  }
  // pages = 1, ..., 4, 5, ..., 16
  // pages = 1, 2, 3, 4, 5
  // pages.length > 5 ? currPage + 2 + ... + last

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