import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewFooter from './ReviewFooter.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      paginatedReviews: [],
      currentPage: 0,
      reviewsPerPage: 7,
      searchResults: [],
      searchInput: ''
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        this.paginate(response.data);
        this.setState({
          reviews: response.data
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  searchHandler(e) {
    e.preventDefault();
    let searchArr = this.state.reviews.slice();
    let tempArr = [];
    for (let i = 0; i < searchArr.length; i++) {
      if (searchArr[i].body.includes(this.state.searchInput)) {
        tempArr.push(searchArr[i]);
      }
    }
    this.paginate(tempArr);
    console.log(tempArr)
  }

  // paginate
  paginate(reviews) {
    let result = [];
    let page = [];
    for (let i = 0; i < reviews.length; i += 7) {
      for (let j = 0; j < this.state.reviewsPerPage; j++) {
        page.push(reviews[j + i]);
      }
      result.push(page);
      page = [];
    }
    this.setState({
      reviews: reviews,
      paginatedReviews: result
    });
  }

  inputHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  pageHandler(e) {
    e.preventDefault();
    this.setState({
      currentPage: e.target.innerText
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {

    let currReviews = this.state.paginatedReviews[this.state.currentPage] || [];

    return (
      <div className="review-body">
        <div className="review-top">
          <div>
            <h4 className="reviews">Reviews</h4>
            <h4 className="review-num">{this.state.reviews.length} </h4><span >reviews</span>
          </div>
        </div>

        <input
          type="text"
          className="review-search"
          placeholder="Search reviews.."
          name="searchInput"
          onChange={this.inputHandler}
          value={this.state.searchInput}
        />
        <button
          onClick={this.searchHandler}
          type="submit"
          className="search-btn">&#x1F50D;
        </button>

        {currReviews.map(review => {
          return <Review
            key={review.id}
            id={review.id}
            name={review.author}
            image={review.image}
            created_at={review.created_at}
            body={review.body} />;
        })}
        <ReviewFooter
          reviews={this.state.reviews}
          reviewsPerPage={this.state.reviewsPerPage}
          pageHandler={this.pageHandler}
        />
      </div>
    );
  }
}

export default App;