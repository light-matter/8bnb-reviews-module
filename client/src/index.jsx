import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewFooter from './ReviewFooter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    };
  }

  getReviews() {
    axios.get('/reviews')
      .then((response) => {
        console.log('this is the response from getReviews: ', response);
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
    return (
      <div className="review-body">
        <div className="review-top">
          <div>
            <h2>Reviews</h2>
            <h2>2 Reviews</h2>
          </div>
          <input className="review-search" placeholder="Search reviews" />
        </div>
        {this.state.reviews.map(review => {
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