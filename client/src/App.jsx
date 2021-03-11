import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 1,
      reviews: []
    };
  }

  componentDidMount() {
    // using sample property number for now, will change
    var propertyNum = window.location.href.slice(22);
    this.state.property = propertyNum;
    // this.getReviews(propertyNum);
    this.getReviews(5);
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        console.log('data:', data);
        this.setState({
          reviews:data
        })
      }
    })
  }


  render () {
    return (
      <div>
        hello world
      <DisplayReviews reviews={this.state.reviews}/>
      </div>
    )
  }


}


ReactDOM.render(<App/>, document.getElementById('app'));