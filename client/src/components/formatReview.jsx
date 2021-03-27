import React from 'react';
import styles from './styles.modules.css';

var FormatReview = (props) => {
  var lmt = '';
  if (props.review.lastminute === true) {
    lmt = '~ Last minute trip'
  }

  return (
    <div className={styles.text}>
      <table classname={styles.reviewstable}>
        <tbody>
          <tr>
            <td style={{width: '65px'}}><img src={props.review.image} className={styles.image}></img></td>
            <td>
              <span className={styles.reviewname}>{props.review.name}</span>
              <br></br>
              <span className={styles.reviewdate}>{props.review.date.month.name} {props.review.date.year} {lmt}</span>
              </td>
          </tr>
        </tbody>
      </table>
      <div className="reviewtext">{props.review.text}</div>
    </div>
  )
}

export default FormatReview;