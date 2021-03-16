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
      averageStars: {
        cleanliness: null,
        communication: null,
        checkin: null,
        accuracy: null,
        location: null,
        value: null
      },
      totalAverage: null,
      totalReviews: null
    };
    this.getAPIstars = this.getAPIstars.bind(this);
    this.getAPIaverage = this.getAPIaverage.bind(this);
  }

  componentDidMount() {
    var propertyNum = window.location.href.split('/').pop();
    this.state.property = propertyNum;
    console.log('propertyNum:', propertyNum);
    this.getReviews(propertyNum);
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        console.log('data:', data);
        this.getAPIaverage(this.state.property);
        this.getAPIstars(this.state.property);
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
        this.setState({
          totalReviews: data.total,
          totalAverage: data.stars
        });
      }
    })
  }

  getAPIstars(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/stars/${property}`,
      success:(data)=>{
        this.setState({
          averageStars: data
        })
        console.log('data:', data);
      }
    })
  }

  render () {
    return (
      <div>
        <div id="reviewheader">
          <DisplayHeader
            property={this.state.property}
            totalAverage={this.state.totalAverage}
            totalReviews={this.state.totalReviews}
            averageStars={this.state.averageStars}
          />
        </div>
        <div id="reviewcontainer">
          <DisplayReviews reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

export default App;