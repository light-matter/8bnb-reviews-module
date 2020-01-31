import React from 'react';
import './styles/Graph.css';

const Graph = (props) => {
  return (
    <div className='GraphContainer'>
      <table>
        <tbody>
          <tr><td>Cleanliness</td><td id="CleanRating"></td><td>Accuracy</td><td id="AccuracyRating"></td></tr>
          <tr><td>Communication</td><td id="CommunicationRating"></td><td>Location</td><td id="LocationRating"></td></tr>
          <tr><td>Check-in</td><td id="CheckinRating"></td><td>Value</td><td id="ValueRating"></td></tr>
        </tbody>
        <div className="MiddleRow"></div>
        <tbody>
          <tr><td>Sparkling Clean</td><td></td><td>Amazing amenities</td><td></td></tr>
          <tr><td>Quick Responses</td><td></td><td>Stylish space</td><td></td></tr>
          <tr><td>Outstanding hospitality</td><td></td><td></td><td></td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Graph;