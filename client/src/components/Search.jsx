import React from 'react';
import styles from './styles.modules.css';
import popup from './popup.modules.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = function(props) {
  return (
    <div className={styles.text}>
      <div className={popup.search}>
        <div className={popup.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className={popup.searchbar}>
          <form onSubmit={props.handleSubmit}>
          <input onSubmit={props.handleSubmit} type="search" id="reviewssearch" placeholder="Search reviews"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;