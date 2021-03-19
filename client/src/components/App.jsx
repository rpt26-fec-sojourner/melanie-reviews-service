import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DisplayReviews from './DisplayReviews.jsx';
import DisplayHeader from './DisplayHeader.jsx';
import DisplayMore from './DisplayMore.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreReviews: false,

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
    this.toggleMoreReviews = this.toggleMoreReviews.bind(this);
  }

  componentDidMount() {
    var propertyNum = window.location.href.split('/').pop();
    this.state.property = propertyNum;
    this.getReviews(propertyNum);
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        this.getAPIaverage(this.state.property);
        this.getAPIstars(this.state.property);
        var sorted = this.orderReviews(data);
        this.setState({
          reviews: sorted
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

  orderReviews(reviews) {
    var sortedReviews = reviews.sort((a, b) => (a.date.year < b.date.year) ? 1 : (a.date.year === b.date.year) ? ((a.date.month.number < b.date.month.number) ? 1 : -1) : -1 );
    return(sortedReviews);
  }

toggleMoreReviews() {
  this.setState({
    moreReviews:!moreReviews
  });
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
          <DisplayMore reviews={this.state.reviews} toggle={this.toggleMoreReviews} more={this.state.moreReviews}/>
        </div>
      </div>
    )
  }
}

export default App;