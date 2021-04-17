import React from 'react';
import styles from './styles.modules.css';
import popup from './popup.modules.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
    </div>
  )
}

export default DisplayAllHeader;