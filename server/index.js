const express = require('express');
const app = express();
const port = 1969;

var database = require('../database/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));


app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// var stars = {
//   // 5: {ratings: {} , average: , total: 0}
// };


app.get(`/reviews/:property`, function(req, res){
  console.log('server called');
  database.getReviews(req.params.property)
  .then((data) => {res.send(data[0].reviews)})
})

app.post(`/reviews/:property`, function(req, res) {
  database.saveProperty(req.params.property)
  res.send(req.params.property);
})

app.get(`/average/:property`, function(req, res) {
  console.log('get average called');
  res.send('get average called successfully');
})

app.get(`/stars/:property`, function(req, res) {
  console.log('get stars called');
  res.send('get stars called successfully');
})

// var collectStars = function(property, starData) {
//     stars.property = {
//       ratings: {
//         cleanliness: starData.stars.cleanliness,
//         communication: starData.stars.communication,
//         checkin: starData.stars.checkin,
//         accuracy: starData.stars.accuracy,
//         location: starData.stars.location,
//         value: starData.stars.value
//       },
//       average: null,
//       total: 0
//     };
// }