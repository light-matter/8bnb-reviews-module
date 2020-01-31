import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import Graph from './Graph.jsx';
import * as d3 from 'd3';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      paginatedReviews: [],
      currentPage: 0,
      reviewsPerPage: 7,
      searchResults: [],
      searchInput: '',
      searching: false,
      CleanRating: 4,
      AccuracyRating: 5,
      CommunicationRating: 4,
      LocationRating: 3,
      CheckinRating: 5,
      ValueRating: 4
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        this.paginate(response.data);
        this.setState({
          searching: false,
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
    this.setState({
      searching: true
    });
    this.paginate(tempArr);
  }

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
      searchInput: e.target.value
    });
  }

  pageHandler(e) {
    e.preventDefault();
    this.setState({
      currentPage: e.target.innerText
    });
  }

  addGraph() {
    d3.select('#CleanRating', '#AccuracyRating')
      .append('svg')
      .attr('width', 100)
      .attr('height', 5)
      .attr('fill', '#008489')
      .append('rect')
      .attr('width', 100)
      .attr('height', 5)
      .attr('x', 0)
      .attr('y', 0);
  }

  componentDidMount() {
    this.getReviews();
    this.addGraph();
  }

  render() {

    let currReviews = this.state.paginatedReviews[this.state.currentPage] || [];

    return (
      <div className="ReviewBody">
        <div className="ReviewTop">
          <div>
            <h4 className="Reviews">Reviews</h4>
            <h4 className="ReviewNum">{this.state.reviews.length} </h4><span >reviews</span>
          </div>

          <Graph />

          <input
            type="text"
            className="ReviewSearch"
            placeholder="Search reviews.."
            name="searchInput"
            onChange={this.inputHandler}
            value={this.state.searchInput}
          />
          <div className="ButtonContainer">
            <button
              className="CancelSearchBtn"
              style={{display: this.state.searching ? 'block' : 'none' }}
              onClick={this.getReviews}>
                x
            </button>
            <button
              onClick={this.searchHandler}
              type="submit"
              className="SearchBtn">
                &#x1F50D;
            </button>
          </div>
        </div>

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