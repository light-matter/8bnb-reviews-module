import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewFooter from './ReviewFooter.jsx';
import Graph from './Graph.jsx';
import star from './images/star.png';
import * as d3 from 'd3';
import './styles/App.css';

class Reviews extends React.Component {
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
      TotalAverageRating: 0,
      CleanRating: 4,
      AccuracyRating: 5,
      CommunicationRating: 4,
      LocationRating: 3,
      CheckinRating: 5,
      ValueRating: 4,
      CleanFav: 0,
      ResponseFav: 0,
      HospitalityFav: 0,
      StylishFav: 0,
      AmenitiesFav: 0
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.pageHandler = this.pageHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.setRatings = this.setRatings.bind(this);
    this.cancelSearchHandler = this.cancelSearchHandler.bind(this);
    this.setFavs = this.setFavs.bind(this);
  }

  getReviews() {
    axios.get('http://ec2-18-224-18-111.us-east-2.compute.amazonaws.com:3003/reviews')
      .then((response) => {
        this.paginate(response.data);
        this.setState({
          searching: false,
          reviews: response.data
        });
      })
      .then(() => {
        this.setRatings();
      })
      .then(() => {
        this.setFavs();
      })
      .then(() => {
        d3.select('.GraphContainer').selectAll('svg').remove();
        this.addGraph();
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

  setRatings() {
    const reviews = this.state.reviews;
    const dataSet = [ 'clean_rating', 'accuracy_rating', 'communication_rating', 'location_rating', 'checkin_rating', 'value_rating' ];
    const ratingState = [ 'CleanRating', 'AccuracyRating', 'CommunicationRating', 'LocationRating', 'CheckinRating', 'ValueRating' ];
    let totalAverage = 0;
    dataSet.forEach((rating, index ) => {
      let average = 0;
      reviews.forEach(review => {
        average += review[rating];
      });
      average = (average / rating.length) / 5;
      totalAverage += average;
      average = average.toFixed(1);
      this.setState({
        [ ratingState[index] ]: average
      });
    });
    totalAverage = totalAverage / 6;
    totalAverage = totalAverage.toFixed(2);
    this.setState({
      TotalAverageRating: totalAverage
    });
  }

  setFavs() {
    const reviews = this.state.reviews;
    const dataSet = [ 'clean_fav', 'response_fav', 'hospitality_fav', 'stylish_fav', 'amenities_fav' ];
    const ratingState = [ 'CleanFav', 'ResponseFav', 'HospitalityFav', 'StylishFav', 'AmenitiesFav' ];

    dataSet.forEach((fav, index ) => {
      let sum = 0;
      reviews.forEach(review => {
        sum += review[fav];
      });
      this.setState({
        [ ratingState[index] ]: sum
      });
    });
  }

  addGraph() {
    const graph = this.state;
    const dataSet = [graph.CleanRating, graph.AccuracyRating, graph.CommunicationRating, graph.LocationRating, graph.CheckinRating, graph.ValueRating ];

    d3.select('.GraphContainer').selectAll('.Rating')
      .data(dataSet)
      .append('svg')
      .style('background', 'lightgrey')
      .style('border-radius', '5px')
      .style('margin-bottom', '2px')
      .attr('width', 100)
      .attr('height', 4)
      .attr('fill', '#008489')
      .append('rect')
      .attr('width', (d) => d * 20)
      .attr('height', 4)
      .attr('x', 0)
      .attr('y', 0);
  }

  cancelSearchHandler() {
    this.getReviews();
    this.setState({
      searchInput: ''
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render() {

    let currReviews = this.state.paginatedReviews[this.state.currentPage] || [];

    return (
      <div className="ReviewBody">
        <div className="ReviewTop">
          <div>
            <h4 className="Reviews">Reviews</h4>
            <h4 className="ReviewNum LeftNum"><img src={star}/>{this.state.TotalAverageRating}</h4><h4 className="ReviewNum RightNum">{this.state.reviews.length} </h4><span >reviews</span>
          </div>

          <Graph
            cleanRating={this.state.CleanRating}
            accuracyRating={this.state.AccuracyRating}
            communicationRating={this.state.CommunicationRating}
            locationRating={this.state.LocationRating}
            checkinRating={this.state.CheckinRating}
            valueRating={this.state.ValueRating}
            cleanFav={this.state.CleanFav}
            responseFav={this.state.ResponseFav}
            hospitalityFav={this.state.HospitalityFav}
            stylishFav={this.state.StylishFav}
            amenitiesFav={this.state.AmenitiesFav}
          />

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
              onClick={this.cancelSearchHandler}>
                X
            </button>
            <button
              style={{display: this.state.searching ? 'none' : 'block' }}
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
          currentPage={this.state.currentPage}
          pageHandler={this.pageHandler}
        />
      </div>
    );
  }
}

export default Reviews;