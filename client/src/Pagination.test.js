import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Pagination from './Pagination.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('checks Pagination renders and functions', function() {
  it('renders pagination', function() {
    // const wrapper = shallow(<Pagination />);
    // const reviews = wrapper.state(99);
    // console.log(reviews);
    // const appComponent = wrapper.find('Pagination');
    // expect(appComponent).toStrictEqual(1);
  });

});