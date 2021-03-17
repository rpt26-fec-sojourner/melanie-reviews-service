import React from 'react';
import FormatReview from './FormatReview.jsx';

var DisplayReviews = (props) => {
  return (
    <div id="reviewlist">
      {props.reviews.map((review) => {
        return <FormatReview review={review}/>
      })}
    </div>
  )
}

export default DisplayReviews;