import React from 'react';
import bathtub from './images/bathtub.png';
import chair from './images/chair.png';
import chatBubble from './images/chatBubbles.png';
import coffeeCup from './images/coffeeCup.png';
import heart from './images/heart.png';
import './styles/Graph.css';

const Graph = (props) => {
  return (
    <div className='GraphContainer'>
      <table>
        <tbody>
          <tr>
            <td className="FirstCol">Cleanliness</td>
            <td className="Rating"></td>
            <td className="MidCol RatingNum">{props.cleanRating}</td>
            <td>Accuracy</td>
            <td className="Rating"></td>
            <td className="RatingNum">{props.accuracyRating}</td>
          </tr>
          <tr>
            <td className="FirstCol">Communication</td>
            <td className="Rating"></td>
            <td className="MidCol RatingNum">{props.communicationRating}</td>
            <td>Location</td>
            <td className="Rating"></td>
            <td className="RatingNum">{props.locationRating}</td>
          </tr>
          <tr>
            <td className="LowerFirstCol">Check-in</td>
            <td className="Rating"></td>
            <td className="MidCol RatingNum">{props.checkinRating}</td>
            <td>Value</td>
            <td className="Rating"></td>
            <td className="RatingNum">{props.valueRating}</td>
          </tr>
        </tbody>
        <div className="MiddleRow"></div>
        <tbody>
          <tr>
            <td className="LowerFirstCol">Sparkling Clean</td>
            <td className="ImageCell"><img src={bathtub} /></td>
            <td className="RatingNum">{props.cleanFav}</td>
            <td>Quick Responses</td>
            <td className="ImageCell"><img src={chatBubble} /></td>
            <td className="RatingNum">{props.responseFav}</td>
          </tr>
          <tr>
            <td className="LowerFirstCol">Outstanding hospitality</td>
            <td className="ImageCell"><img src={heart} /></td>
            <td className="RatingNum">{props.hospitalityFav}</td>
            <td>Stylish space</td>
            <td className="ImageCell"><img src={chair} /></td>
            <td className="RatingNum">{props.stylishFav}</td>
          </tr>
          <tr>
            <td className="FirstCol">Amazing amenities</td>
            <td className="ImageCell"><img src={coffeeCup} /></td>
            <td className="RatingNum">{props.amenitiesFav}</td>
            <td></td>
            <td></td>
            <td className="RatingNum"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Graph;