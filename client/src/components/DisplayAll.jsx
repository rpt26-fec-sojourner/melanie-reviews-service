import React from 'react';
import DisplayAllHeader from './DisplayAllHeader.jsx';
import FormatReview from './FormatReview.jsx';

const DisplayAll = function(props) {
  // if (props.all === true) {
    return (
      <div id="morereviews">
        <div id="morereviewsheader">
          <DisplayAllHeader
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