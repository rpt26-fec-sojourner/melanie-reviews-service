// Restyle once everything has basic functionality

import React from 'react';

var FormatReview = (props) => {
  var lmt = '';
  if (props.review.lastminute === true) {
    lmt = '~ Last minute trip'
  }

  return (
    <div className="singlereview">
      <div className="image">
        <img src={props.review.image}></img>
      </div>
      <div className="reviewername">{props.review.name}</div>
      <div className="reviewdate">{props.review.date.month.name} {props.review.date.year} {lmt}</div>
      <div className="reviewtext">{props.review.text}</div>
    </div>
  )
}

export default FormatReview;