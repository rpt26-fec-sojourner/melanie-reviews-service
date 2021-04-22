import React from 'react';
import popup from './popup.modules.css';
import styles from './styles.modules.css';
import DisplayAll from './DisplayAll.jsx';
import DisplayAllHeader from './DisplayAllHeader.jsx';
import StarAverages from './StarAverages.jsx';
import Search from './Search.jsx';
import FormatReview from './FormatReview.jsx';

const Popup = (props) => {
  if (props.all === true) {
    return(<div>
      <div class={popup.bg}>

        <div class={popup.content_box}>
          <span class={popup.close} onClick={props.closePopup}>&times;</span>
          <br></br>
          <br></br>
          <br></br>
          <table className={popup.table}>
            <tr>
              <th>
                <DisplayAllHeader
                  property={props.property}
                  totalAverage={props.totalAverage}
                  totalReviews={props.totalReviews}
                  averageStars={props.averageStars}
                />
              </th>
              <th>
                <Search handleSubmit={props.handleSubmit}/>
              </th>
            </tr>
            <tr>
              <td className={popup.table}>
                <StarAverages
                  property={props.property}
                  totalAverage={props.totalAverage}
                  totalReviews={props.totalReviews}
                  averageStars={props.averageStars}
                />
              </td>
              <td className={popup.table}>
                <div className={popup.allreviews}>
                  {props.reviews.map((review) => {
                  return <FormatReview review={review}/>
                  })}
                </div>
              </td>
            </tr>
          </table>
        </div>

      </div>
    </div>)
  }
  else {return <div></div>}
};

export default Popup;