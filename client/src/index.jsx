import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './Review.jsx';
import ReviewFooter from './ReviewFooter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="review-body">
        <div className="review-top">
          <div>
            <h2>Reviews</h2>
            <h2>2 Reviews</h2>
          </div>
          <input className="review-search" />
        </div>
        <Review />
        <Review />
        <Review />
        <ReviewFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));