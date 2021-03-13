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
    var propertyNum = window.location.href.slice(23);
    this.state.property = propertyNum;
    // this.getReviews(toString(propertyNum));
    this.getReviews(6)
  }

  getReviews(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/reviews/${property}`,
      success:(data)=>{
        console.log('data:', data);
        this.testAPIaverage(6);
        this.testAPIstars(6);
        this.setState({
          reviews:data
        })
      }
    })
  }

  testAPIaverage(property) {
    $.ajax({
      type: "GET",
      url: `http://localhost:1969/average/${property}`,
      success:(data)=>{
        console.log('data:', data);
      }
    })
  }

  testAPIstars(property) {
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
        <p id="testrender">hello world</p>
        <p className = "second">yo</p>
      {/* <DisplayReviews reviews={this.state.reviews}/> */}
      </div>
    )
  }


}


// ReactDOM.render(<App/>, document.getElementById('app'));

export default App;