const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacebnb');


let reviewsSchema = mongoose.Schema({
  Reviews schema {
    property: Number,
    reviews: []
  }
})