import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import requestAnimationFrame from '../tempPolyfills.js';
import { testData } from '../data/fixtures.js';

import Pagination from '../Pagination.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = {
  reviewsPerPage: 7,
  reviews: testData
};

describe('Pagination', function() {

  test('check passing props', function() {
    let wrapper = shallow(<Pagination {...props} />);
    expect(props.reviews.length).toEqual(15);
  });

  test('checks correct number of pagination page tabs showing', function() {
    let wrapper = shallow(<Pagination {...props} />);
    console.log('tag', wrapper);
    let reviewItem = wrapper.find('.ReviewItem');
    expect(reviewItem.length).toEqual(3);
  });

});