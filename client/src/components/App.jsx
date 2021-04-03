import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DisplayReviews from './DisplayReviews.jsx';
import DisplayHeader from './DisplayHeader.jsx';
import DisplayAll from './DisplayAll.jsx';
import styles from './styles.modules.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: false,
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
    this.toggleAllReviews = this.toggleAllReviews.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    var propertyNum = window.location.href.split('/').pop();
    this.state.property = propertyNum;
    this.getReviews(propertyNum);
  }

  getURL() {
    var url = window.location.href;
    url = url.split(':');
    url.pop();
    url = url.join(':');
    return url;
  }

  getReviews(property) {
    var url = this.getURL();
    $.ajax({
      type: "GET",
      url: `${url}:1969/reviews/${property}`,
      // url: `http://localhost:1969/reviews/${property}`,
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
    var url = this.getURL();
    $.ajax({
      type: "GET",
      url: `${url}:1969/average/${property}`,
      // url: `http://localhost:1969/average/${property}`,
      success:(data)=>{
        this.setState({
          totalReviews: data.total,
          totalAverage: data.stars
        });
      }
    })
  }

  getAPIstars(property) {
    var url = this.getURL();
    $.ajax({
      type: "GET",
      url: `${url}:1969/stars/${property}`,
      // url: `http://localhost:1969/stars/${property}`,
      success:(data)=>{
        this.setState({
          averageStars: data
        })
      }
    })
  }

  orderReviews(reviews) {
    var sortedReviews = reviews.sort((a, b) => (a.date.year < b.date.year) ? 1 : (a.date.year === b.date.year) ? ((a.date.month.number < b.date.month.number) ? 1 : -1) : -1 );
    return(sortedReviews);
  }

toggleAllReviews() {
  this.setState({
    allReviews: !this.state.allReviews
  });
}

handleClick() {
  this.toggleAllReviews();
}

handleSubmit(e) {
  e.preventDefault();
  console.log('searched', e.target);
}

  render () {
    return (
      <div>
        <div id="reviewheader" className={styles.test}>
          <DisplayHeader
            property={this.state.property}
            totalAverage={this.state.totalAverage}
            totalReviews={this.state.totalReviews}
            averageStars={this.state.averageStars}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div id="reviewcontainer">
          <DisplayReviews reviews={this.state.reviews}/>
          <button onClick={this.handleClick}>Show all {this.state.totalReviews} reviews</button>
          <DisplayAll
            reviews={this.state.reviews}
            toggle={this.toggleAllReviews}
            all={this.state.allReviews}
            property={this.state.property}
            totalAverage={this.state.totalAverage}
            totalReviews={this.state.totalReviews}
            averageStars={this.state.averageStars}
          />
        </div>
      </div>
    )
  }
}

export default App;