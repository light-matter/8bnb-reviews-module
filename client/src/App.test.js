import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ReviewFooter from './ReviewFooter.jsx';
import Review from './Review.jsx';
import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const testData = [
  {id: 1, author: 'Erin Sipes', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg', body: 'Rem enim quam consectetur laborum nostrum veritatis impedit quisquam.', host_id: 1},
  {id: 2, author: 'Jermey Haag Sr.', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/chris_witko/128.jpg', body: 'Voluptatem et officiis.', host_id: 1},
  {id: 3, author: 'Manuel Grimes', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg', body: 'Quia recusandae sed molestiae.', host_id: 1},
  {id: 4, author: 'Xavier DuBuque MD', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg', body: 'Consequuntur eum dolorem.', host_id: 1},
  {id: 5, author: 'Mr. Olen Green', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/irae/128.jpg', body: 'Officiis maxime pariatur minima sit hic.', host_id: 1},
  {id: 6, author: 'Antwon Stehr', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/joshuaraichur/128.jpg', body: 'Iure aperiam veniam et qui.', host_id: 1},
  {id: 7, author: 'Ben Stroman I', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg', body: 'Eos dolores deleniti alias dolores natus eaque.', host_id: 1},
  {id: 8, author: 'Anahi Murphy IV', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/lebinoclard/128.jpg', body: 'Culpa deleniti voluptatem voluptatem similique eos.', host_id: 1},
  {id: 9, author: 'Rahul Kunze', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/hugomano/128.jpg', body: 'Enim praesentium molestiae expedita voluptatem voluptatem earum necessitatibus nulla.', host_id: 1},
  {id: 10, author: 'Keaton Robel', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg', body: 'Non odio repudiandae tempore autem temporibus explicabo assumenda architecto.', host_id: 1},
  {id: 11, author: 'Dr. Josephine Kihn', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ryuchi311/128.jpg', body: 'In commodi exercitationem illum ab facere reiciendis officia.', host_id: 1},
  {id: 12, author: 'Rupert Raynor', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/silvanmuhlemann/128.jpg', body: 'Similique autem iusto sapiente aut vel eius earum iure.', host_id: 1},
  {id: 13, author: 'Luciano Halvorson', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/edhenderson/128.jpg', body: 'Ipsa earum velit dolorem.', host_id: 1},
  {id: 14, author: 'Julia Willms', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/duck4fuck/128.jpg', body: 'Accusantium ea suscipit eaque cumque minus voluptatibus est et.', host_id: 1},
  {id: 15, author: 'Irving Erdman DVM', image: 'https://s3.amazonaws.com/uifaces/faces/twitter/kanickairaj/128.jpg', body: 'Quam inventore non omnis ducimus dolorem.', host_id: 1}
];


// the describe function is the test suite
describe('checks to see if App is rendering properly', function() {

  test('renders app component without crashing', function() {
    const wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });

  test('renders body of review', function() {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find('.review-body');
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

  test('renders 7 reviews at a time', function() {
    const wrapper = mount(<App />);
    wrapper.setState({
      reviews: testData,
      paginatedReviews: [],
      currentPage: 0,
      reviewsPerPage: 7
    });
    console.log(wrapper.state())
    console.log(wrapper.debug())

    // expect(reviewComponents.length).toEqual(7);
    // console.log(reviewComponents)
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

