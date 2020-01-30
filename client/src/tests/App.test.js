import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ReviewFooter from '../ReviewFooter.jsx';
import Review from '../Review.jsx';
import App from '../App.jsx';
import { testData } from '../data/fixtures.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('checks to see if App is rendering properly', function() {

  test('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });

  test('renders body of review', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('.ReviewBody');
    expect(appComponent.length).toStrictEqual(1);
  });

  test('renders search input', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('input');
    expect(appComponent.length).toStrictEqual(1);
  });

  test('renders search input', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('input');
    expect(appComponent.length).toStrictEqual(1);
  });

  test('paginates 7 reviews per view', function() {
    const wrapper = mount(<App />);
    const instance = wrapper.instance();
    wrapper.setState({
      reviews: testData,
      paginatedReviews: [],
      currentPage: 0,
      reviewsPerPage: 7
    });
    instance.paginate(testData);
    expect(wrapper.state().paginatedReviews[1].length).toEqual(7);
  });

  describe('updating search input', function() {
    const wrapper = shallow(<App />);
    beforeEach(() => {
      wrapper.find('input').simulate('change', { target: { value: 'some search' } });
    });
    test('updates search input', function() {
      expect(wrapper.state().searchInput).toEqual('some search');
    });
  });
});

