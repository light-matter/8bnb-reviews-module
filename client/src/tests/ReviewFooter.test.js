import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from '../App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Review Footer', () => {
  const wrapper = mount(<App />);
  const component = wrapper.find('.ReviewFooter');
  test('renders ReviewFooter', () => {
    expect(component.length).toEqual(1);
  });
});