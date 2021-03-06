import React from 'react';
import styles from './styles.modules.css';


// Currently this displays them down in a single column which is why I don't have this being used for both the regular view and the popup view

const StarAverages = function(props) {

  var percentage = function(starcount) {
    var percentage = Math.floor(starcount / 5 * 100);
    return percentage.toString() + '%';
  }

  return (
    <table className={styles.text}>
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
    )

}

export default StarAverages;