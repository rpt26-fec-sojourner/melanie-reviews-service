import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DisplayReviews from './DisplayReviews.jsx';
import DisplayHeader from './DisplayHeader.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 1,
      reviews: [],
      averageStars: null,
      totalAverage: null,
      totalReviews: null
    };
    this.getAPIstars = this.getAPIstars.bind(this);
    this.getAPIaverage = this.getAPIaverage.bind(this);
  }

  componentDidMount() {
    // using sample property number for now, will change
    var propertyNum = window.location.href.slice(23);
    this.state.property = propertyNum;
    // this.getReviews(toString(propertyNum));
    this.getReviews(1)
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        console.log('data:', data);
        this.getAPIaverage(1);
        this.getAPIstars(1);
        this.setState({
          reviews:data
        })
      }
    })
  }

  getAPIaverage(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/average/${property}`,
      success:(data)=>{
        console.log('data:', data);
      }
    })
  }

  getAPIstars(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/stars/${property}`,
      success:(data)=>{

        console.log('data:', data);
      }
    })
  }

  render () {
    return (
      <div>
        <div id="reviewheader">
          <DisplayHeader getAverage={this.getAPIaverage} getStars={this.getAPIstars} property={this.state.property}/>
        </div>
        <div id="reviewcontainer">
          <DisplayReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default App;