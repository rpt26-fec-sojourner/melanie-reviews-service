const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacebnb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);


let reviewsSchema = mongoose.Schema({
    propertyName: {unique: true, type: String},
    reviews: []
  }
)

let Reviews = mongoose.model('Reviews', reviewsSchema);

let saveProperty = (propertyNum) => {
  // mongoose.connect('mongodb://localhost/spacebnb', { useNewUrlParser: true, useUnifiedTopology: true });
  // mongoose.set('useCreateIndex', true);

  console.log('mongo propertyObj: ', propertyNum)
  let property = new Reviews({
    propertyName: propertyNum,
    reviews: []
  })
  console.log('property:', property)
  property.save()

  // .then(result => {
  //   mongoose.connection.close();
  // })
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
  console.log('object saved: ', reviewObj.property);
  let db = mongoose.connection;
  Reviews.updateOne(
    {"propertyName": reviewObj.property},
    {$push: {"reviews": review}}
  )
  .then(result => {
    console.log(result)
    // mongoose.connection.close();
  })
}

let getReviews = (propertyID) => {
  mongoose.connect('mongodb://localhost/spacebnb');
  let db = mongoose.connection;
  return Reviews.findOne({property: propertyID})
}

module.exports.saveProperty = saveProperty;
module.exports.saveReview = saveReview;
module.exports.getReviews = getReviews;