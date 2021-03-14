// Restyle once everything has basic functionality

import React from 'react';

var FormatReview = (props) => {
  var lmt = '';
  if (props.review.lastminute === true) {
    lmt = '~ Last minute trip'
  }

  return (
    <div>
      <div class="image">
        <img src={props.review.image}></img>
      </div>
      <div class="reviewername">{props.review.name}</div>
      <div class="reviewdate">{props.review.date.month.name} {props.review.date.year} {lmt}</div>
      <div class="reviewtext">{props.review.text}</div>
    </div>
  )
}

export default FormatReview;