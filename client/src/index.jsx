import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import seedProperties from './components/seedProperties.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.getReviews(5);
    // seedProperties();
    // $.ajax({
    //   type: "POST",
    //   url: `http://localhost:1969/reviews/${6}`,
    //   success:(data)=>{
    //     // data = JSON.parse(data);
    //     console.log('post data:', data);
    //   }
    // })
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        // data = JSON.parse(data);
        console.log('data:', data);
      }
    })
  }


  render () {
    return (
      <div>
        hello world
      </div>
    )
  }


}


ReactDOM.render(<App/>, document.getElementById('app'));