const express = require('express');
const app = express();
const port = 1969;
const database = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

var stars = {
  // 5: {ratings: {} , average: , total: 0}
};

app.get(`/reviews/:property`, function(req, res){
  console.log('server called');
  database.getReviews(req.params.property)
  .then((data) => {
    var reviews = data[0].reviews;
    collectStars(req.params.property, reviews)
    res.send(reviews)})
})

app.post(`/reviews/:property`, function(req, res) {
  database.saveProperty(req.params.property)
  res.send(req.params.property);
})

app.get(`/average/:property`, function(req, res) {
  console.log('get average called');
  var property = req.params.property;
  console.log(stars)
  res.send({
    stars: stars[property].totalAverage,
    total: stars[property].totalReviews
  });
})

app.get(`/stars/:property`, function(req, res) {
  console.log('get stars called');
  var property = req.params.property;
  res.send(
    stars[property].ratings
  );
})

var collectStars = function(property, starData) {
  // if (!stars[property]) {
    stars[property] = {
      ratings: {},
      totalAverage: null,
      totalReviews: null
    }
  // }
  var cleanlinessArray = [];
  var communicationArray = [];
  var checkinArray = [];
  var accuracyArray = [];
  var locationArray = [];
  var valueArray = [];

  for (var i = 0; i < starData.length; i++) {
    cleanlinessArray.push(starData[i].stars.cleanliness);
    communicationArray.push(starData[i].stars.communication);
    checkinArray.push(starData[i].stars.checkin);
    accuracyArray.push(starData[i].stars.accuracy);
    locationArray.push(starData[i].stars.location);
    valueArray.push(starData[i].stars.value);
  }
  var findAverage = function(array) {
    var added = 0;
    for (var j = 0; j < array.length; j++) {
      added += array[j];
    }
    var average = added / array.length;
    return average;
  };

  stars[property].ratings.cleanliness = Math.round(findAverage(cleanlinessArray) * 10) / 10;
  stars[property].ratings.communication = Math.round(findAverage(communicationArray) * 10) / 10;
  stars[property].ratings.checkin = Math.round(findAverage(checkinArray) * 10) / 10;
  stars[property].ratings.accuracy = Math.round(findAverage(accuracyArray) * 10) / 10;
  stars[property].ratings.location = Math.round(findAverage(locationArray) * 10) / 10;
  stars[property].ratings.value = Math.round(findAverage(valueArray) * 10) / 10;
  stars[property].totalAverage = Math.round(findAverage([
    stars[property].ratings.cleanliness,
    stars[property].ratings.communication,
    stars[property].ratings.checkin,
    stars[property].ratings.accuracy,
    stars[property].ratings.location,
    stars[property].ratings.value
  ]) * 10) / 10;
  stars[property].totalReviews = starData.length;
  // console.log(stars)
}