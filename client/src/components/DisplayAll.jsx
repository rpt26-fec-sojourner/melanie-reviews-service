import React from 'react';
import DisplayHeader from './DisplayHeader.jsx';
import FormatReview from './FormatReview.jsx';

const DisplayAll = function(props) {
  // if (props.all === true) {
    return (
      <div id="morereviews">
        <div id="morereviewsheader">
          <DisplayHeader
            property={props.property}
            totalAverage={props.totalAverage}
            totalReviews={props.totalReviews}
            averageStars={props.averageStars}
            all={props.all}
          />
        </div>
        <div id="morereviewslist">
          {props.reviews.map((review) => {
            return <FormatReview review={review}/>
          })}
        </div>
      </div>
    )
  // } else {
  //   return (
  //     <div></div>
  //   )
  // }
}

export default DisplayAll;