import React from "react";
import popup from "./popup.modules.css";
import DisplayAll from "./DisplayAll.jsx";

const Popup = (props) => {
  if (props.all === true) {
    return(<div>
      <div class={popup.bg}>

        <div class={popup.content_box}>
          <span class={popup.close} onClick={props.closePopup}>&times;</span>
          <br></br>
          <br></br>
          <br></br>
          <DisplayAll
            reviews={props.reviews}
            property={props.property}
            totalAverage={props.totalAverage}
            totalReviews={props.totalReviews}
            averageStars={props.averageStars}
            all={props.all}
          />
        </div>

      </div>
    </div>)
  }
  else {return <div></div>}
};

export default Popup;