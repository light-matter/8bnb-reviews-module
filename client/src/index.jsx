import React from 'react';
import ReactDOM from 'react-dom';
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
      postsPerPage: 7
    };
  }

  // paginate
  paginate(reviews) {
    let result = [];
    let page = [];
    for (let i = 0; i < reviews.length; i += 7) {
      for (let i = 0; i < 7; i++) {
        page.push(reviews[i]);
      }
      result.push(page);
      page = [];
    }
    this.setState({
      paginatedReviews: result
    });
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        this.paginate(response.data);
        console.log('from getReviews: ', response.data.length)
        this.setState({
          reviews: response.data
        });
      })
      .catch((err) => {
        console.log(err);
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
        <input className="review-search" placeholder="Search reviews" />
        {currReviews.map(review => {
          return <Review
            key={review.id}
            name={review.author}
            image={review.image}
            created_at={review.created_at}
            body={review.body} />;
        })}
        <ReviewFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));