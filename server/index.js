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


app.get(`/reviews/:property`, function(req, res){
  console.log('server called')
  database.getReviews(req.params.property)
  .then((data) => {res.send(data[0].reviews)})
})

app.post(`/reviews/:property`, function(req, res) {
  database.saveProperty(req.params.property)
  res.send(req.params.property);
})