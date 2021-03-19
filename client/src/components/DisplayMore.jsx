import React from 'react';
import DisplayHeader from './DisplayHeader.jsx';
import FormatReview from './FormatReview.jsx';

const DisplayMore = function(props) {
  // come up with a way to add a search bar without making a separate header component for the 'see more' popup
  if (props.more === true) {
    return (
      <div id="morereviews">
        <div id="morereviewsheader">
          <DisplayHeader
            property={props.property}
            totalAverage={props.totalAverage}
            totalReviews={props.totalReviews}
            averageStars={props.averageStars}
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