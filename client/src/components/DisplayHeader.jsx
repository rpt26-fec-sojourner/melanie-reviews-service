import React from 'react';

var DisplayHeader = (props) => {
  props.getAverage();
  return (
    <div>
      <h2>
        / Star Image Here /
        {}
        {}
      </h2>
    </div>
  )
}

export default DisplayHeader;