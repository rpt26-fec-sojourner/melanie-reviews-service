import React from 'react';
import styles from './styles.modules.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';

var DisplayAllHeader = (props) => {

  var percentage = function(starcount) {
    var percentage = Math.floor(starcount / 5 * 100);
    return percentage.toString() + '%';
  }

  return (
    <div className={styles.text}>
      <div className={styles.title}>
        <div className={styles.shrinkthegoshdarnstar}>
          <FontAwesomeIcon icon={solidFaStar} style={{color:'#FC395C'}}/>
        </div>  {props.totalAverage} ({props.totalReviews} reviews)
      </div>
      <form onSubmit={props.handlesubmit}>
      <input type="search" id="reviewssearch" ></input>
      </form>
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
  )
}

export default DisplayAllHeader;