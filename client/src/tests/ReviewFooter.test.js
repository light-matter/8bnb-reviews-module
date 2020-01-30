import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ReviewFooter from '../ReviewFooter.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Review Footer', () => {
  const wrapper = shallow(<ReviewFooter />);
  const component = wrapper.find('.ReviewFooter');
  test('renders ReviewFooter', () => {
    expect(component.length).toEqual(1);
  });
});