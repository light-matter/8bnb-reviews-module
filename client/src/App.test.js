import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('Test suite for the tests', function() {
  it('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
  it('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
});

// the ok term above is a chai term that says the outcome will be truthy (i.e. will satisfy and if condition)

//it groups spec tests together to make up a whole unit test