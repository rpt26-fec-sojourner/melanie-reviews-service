const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacebnb');


let reviewsSchema = mongoose.Schema({
    property: Number,
    reviews: []
  }
})

let Reviews = mongoose.model('Reviews', reviewsSchema);

let saveProperty = (propertyObj) => {
  let property = new Reviews({
    property = propertyObj.property,
    reviews = []
  })
  property.save()
  .then(result => {
    mongoose.connection.close();
  })
}

let saveReview = (reviewObj) => {
  let review = {
    date: {
      month: reviewObj.date.month,
      year: reviewObj.date.year
    },
    name: reviewObj.name,
    image: reviewObj.image,
    lastminute: reviewObj.lastminute,
    text: reviewObj.text,
    stars: {
      cleanliness: reviewObj.stars.cleanliness,
      communication: reviewObj.stars.communication,
      checkin: reviewObj.stars.checkin,
      accuracy: reviewObj.stars.accuracy,
      location: reviewObj.stars.location,
      value: reviewObj.stars.value
    }
  };
  let db = mongoose.connection;
  db.Reviews.update(
    {property: reviewObj.property},
    {$push: {reviews: review}}
  )
  .then(result => {
    mongoose.connection.close();
  })
}

let getReviews = (propertyID) => {
  mongoose.connect('mongodb://localhost/spacebnb');
  let db = mongoose.connection;
  return Reviews.findOne({property: propertyID})
}