import React from 'react';
import styles from './styles.modules.css';

var DisplayHeader = (props) => {
  var search;
  if (props.more) {
    search =
    <form onsubmit={props.handleSubmit}>
      <input type="search" id="reviewssearch" ></input>
    </form>
  }
  var percentage = function(starcount) {
    var percentage = Math.floor(starcount / 5 * 100);
    return percentage.toString() + '%';
  }

  console.log(percentage(props.averageStars.cleanliness));

  return (
    <div className={styles.text}>
      <h2>
        <p className="fa fa-star" style={{color:'#FC395C'}}></p>
          {props.totalAverage} ({props.totalReviews} reviews)
      </h2>
      {search}
      <table>
        <tbody>
        <tr>
          <td>Cleanliness</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.cleanliness)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.cleanliness}</td>
          <td>Accuracy</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.accuracy)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.accuracy}</td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.communication)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.communication}</td>
          <td>Location</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.location)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.location}</td>
        </tr>
        <tr>
          <td>Check In</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.checkin)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.checkin}</td>
          <td>Value</td>
          <td>
            <div className={styles.outerprogress}>
              <div style={{width:percentage(props.averageStars.value)}} className={styles.progress}></div>
            </div>
          </td>
          <td>{props.averageStars.value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DisplayHeader;