import React from 'react';
import DisplayHeader from './DisplayHeader.jsx';
import FormatReview from './formatReview.jsx';

const DisplayMore = function(props) {
  if (props.more === true) {
    return (
      <div id="morereviews">
        <div id="morereviewsheader">
          <DisplayHeader
            property={props.property}
            totalAverage={props.totalAverage}
            totalReviews={props.totalReviews}
            averageStars={props.averageStars}
            more={props.more}
          />
        </div>
        <div id="morereviewslist">
          {props.reviews.map((review) => {
            return <FormatReview review={review}/>
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default DisplayMore;