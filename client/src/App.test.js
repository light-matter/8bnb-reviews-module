import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ReviewFooter from './ReviewFooter.jsx';
import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('checks if App is rendering properly', function() {
  it('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });
  it('renders body of review', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('.review-body');
    expect(appComponent.length).toStrictEqual(1);
  });
  it('renders search input', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('input');
    expect(appComponent.length).toStrictEqual(1);
  });
  it('renders search submit btn', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('button');
    expect(appComponent.length).toStrictEqual(1);
  });
  it('renders search input', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('ReviewFooter');
    expect(appComponent.length).toStrictEqual(1);
  });
});

// the ok term above is a chai term that says the outcome will be truthy (i.e. will satisfy and if condition)

//it groups spec tests together to make up a whole unit test