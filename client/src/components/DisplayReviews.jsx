import React from 'react';
import FormatReview from './FormatReview.jsx';

var DisplayReviews = (props) => {
  var topSix = props.reviews.slice(0,6);
  return (
    <div id="reviewlist">
      {topSix.map((review) => {
        return <FormatReview review={review}/>
      })}
    </div>
  )
}

export default DisplayReviews;