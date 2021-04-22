// I don't think this file is even being used anymore since I refactored to add a popup

import React from 'react';
import DisplayAllHeader from './DisplayAllHeader.jsx';
import FormatReview from './FormatReview.jsx';
import popup from './popup.modules.css';
import styles from './styles.modules.css';

const DisplayAll = function(props) {

  var percentage = function(starcount) {
    var percentage = Math.floor(starcount / 5 * 100);
    return percentage.toString() + '%';
  }

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
        <div id="popupshowall" className={styles.text}>
          <div className={popup.staraverages}>
            <table>
              <tbody>
              <tr>
                <td>Cleanliness</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.cleanliness)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.cleanliness}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.accuracy)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.accuracy}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.communication)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.communication}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.location)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.location}</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Check In</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.checkin)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.checkin}</span>
                  </div>
                </td>
                </tr>
              <tr>
                <td>Value</td>
                <td>
                  <div className={styles.allprogress}>
                    <div className={styles.outerprogress}>
                      <div style={{width:percentage(props.averageStars.value)}} className={styles.progress}>
                      </div>
                    </div>
                    <span className={styles.averages}>{props.averageStars.value}</span>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div id="morereviewslist" className={popup.allreviews}>
            {props.reviews.map((review) => {
              return <FormatReview review={review}/>
            })}
          </div>
        </div>
      </div>
    )
}

export default DisplayAll;