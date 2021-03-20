import React from 'react';

var DisplayHeader = (props) => {
  var search;
  if (props.more) {
    search =
    <form onsubmit={props.handleSubmit}>
      <input type="search" id="reviewssearch" ></input>
    </form>

  }
  return (
    <div>
      <h2>
        / Star Image Here / {props.totalAverage} ({props.totalReviews} reviews)
      </h2>
      {search}
      <table>
        <tbody>
        <tr>
          <td>Cleanliness</td><td>{props.averageStars.cleanliness}</td>
          <td>Accuracy</td><td>{props.averageStars.accuracy}</td>
        </tr>
        <tr>
          <td>Communication</td><td>{props.averageStars.communication}</td>
          <td>Location</td><td>{props.averageStars.location}</td>
        </tr>
        <tr>
          <td>Check In</td><td>{props.averageStars.checkin}</td>
          <td>Value</td><td>{props.averageStars.value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayHeader;