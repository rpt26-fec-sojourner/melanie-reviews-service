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
  // req.params.property = string number
  database.getReviews(Number(req.params.property));
  res.end();
})

app.post(`/reviews/:property`, function(req, res) {

  database.saveProperty(req.params.property)
  res.send(req.params.property);
})