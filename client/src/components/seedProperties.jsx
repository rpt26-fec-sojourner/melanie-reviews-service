import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var seedProperty = () => {
  for (var i = 1; i < 101; i++) {
    $.ajax({
      type: "POST",
      url: `http://localhost:1969/reviews/${i}`,
      success:(data)=>{
        // data = JSON.parse(data);
        console.log('post data:', data);
      }
    })
  }
}

export default seedProperty;