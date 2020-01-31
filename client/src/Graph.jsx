import React from 'react';
import './styles/Graph.css';

const Graph = (props) => {
  return (
    <div className='GraphContainer'>
      <table>
        <tbody>
          <tr><td>Cleanliness</td><td className="Rating"></td><td>Accuracy</td><td className="Rating"></td></tr>
          <tr><td>Communication</td><td className="Rating"></td><td>Location</td><td className="Rating"></td></tr>
          <tr><td>Check-in</td><td className="Rating"></td><td>Value</td><td className="Rating"></td></tr>
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