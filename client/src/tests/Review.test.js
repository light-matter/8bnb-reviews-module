import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Review from '../Review.jsx';
import App from '../App.jsx';
import { testData } from '../data/fixtures.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('checks if reviews are rendering properly', function() {

  const review = {
    author: 'Some Guy',
    image: 'https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg',
    body: 'A bunch of filler text.',
    createdAt: '2020-01-01'
  };

  describe('paginated reviews', function() {
    const wrapper = mount(<App />);
    console.log(wrapper.render().children());
    beforeEach(() => {
      wrapper.setState({ reviews: testData });
      // console.log(wrapper.state('reviews'))
    });
    test('state updates', function() {
      expect(wrapper.state('reviews').length).toEqual(15);
    });
    test('only shows 7 reviews at a time', function() {
      // console.log(wrapper.state('paginatedReviews'))
    });
  });

  test('renders authors name', function() {
    const wrapper = mount(<Review name={review.author} />);
    const author = wrapper.find('.Name').text();
    expect(author).toEqual('Some Guy');
    // console.log('this is from inside the test!!!!!!', wrapper.debug());
  });

  test('renders reviewers image', function() {
    const wrapper = shallow(<Review image='https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg' />);
    const imageUrl = wrapper.find('img').prop('src');
    expect(imageUrl).toEqual('https://s3.amazonaws.com/uifaces/faces/twitter/xravil/128.jpg');
  });

  test('renders text body of review', function() {
    const wrapper = shallow(<Review body={review.body} />);
    const body = wrapper.find('.ReviewBody').text();
    expect(body).toEqual('A bunch of filler text.');
  });

  test('renders date the review was written', function() {
    const wrapper = shallow(<Review created_at={review.createdAt} />);
    const date = wrapper.find('.Date').text();
    expect(date).toEqual('2020-01-01');
  });


});
