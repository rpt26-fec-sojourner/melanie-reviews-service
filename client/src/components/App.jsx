import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import DisplayReviews from './DisplayReviews.jsx';
import DisplayHeader from './DisplayHeader.jsx';
import DisplayAll from './DisplayAll.jsx';
import styles from './styles.modules.css';
import Popup from './Popup.jsx';
import popup from './popup.modules.css';

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
      ////// use this URL when committing for deployment //////
      // url: `http://3.21.252.90:1969/reviews/${property}`,
      ////// use this URL to play locally //////
      url: `http://localhost:1969/reviews/${property}`,
      ////// this URL may have another purpose? //////
      // url: `${url}:1969/reviews/${property}`,
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
      ////// use this URL when committing for deployment //////
      // url: `http://3.21.252.90:1969/average/${property}`,
      ////// use this URL when playing locally //////
      url: `http://localhost:1969/average/${property}`,
      ////// this URL may have another purpose? //////
      // url: `${url}:1969/average/${property}`,
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
      ////// use this URL when committing for deployment //////
      // url: `http://3.21.252.90:1969/stars/${property}`,
      ////// use this URL when playing locally //////
      url: `http://localhost:1969/stars/${property}`,
      ////// this URL may have another purpose? //////
      // url: `${url}:1969/stars/${property}`,
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

  // for 'see all reviews' button
  handleClick() {
    this.toggleAllReviews();
  }

  // for search bar
  handleSubmit(e) {
    e.preventDefault();
    console.log('searched', e.target);
  }

  render () {
    return (
      <div className={styles.reviewsservice}>
        <div id="reviewheader" className={styles.test}>
          <DisplayHeader
          // Unresolved bug: handleSubmit is not being passed as a prop. Neither is the 'test' prop. Other props are passing as normal. Anyone who finds whatever typo is breaking this, please share!
            handleSubmit={this.handleSubmit}
            test={'this is a test'}
            property={this.state.property}
            totalAverage={this.state.totalAverage}
            totalReviews={this.state.totalReviews}
            averageStars={this.state.averageStars}
          />
        </div>
        <div id="reviewcontainer">
          <DisplayReviews reviews={this.state.reviews}/>
          <button onClick={this.handleClick} className={styles.allbutton}>Show all {this.state.totalReviews} reviews</button>
          <Popup
            all={this.state.allReviews}
            displayPopup={this.displayPopup}
            closePopup={this.toggleAllReviews}
            reviews={this.state.reviews}
            property={this.state.property}
            totalAverage={this.state.totalAverage}
            totalReviews={this.state.totalReviews}
            averageStars={this.state.averageStars}
            handleSubmit={this.state.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default App;