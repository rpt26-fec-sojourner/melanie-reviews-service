require("dotenv").config();
// const AWS = require('aws-sdk');
// AWS.config.update({
//   accessKeyId: process.env.AWSACCESS,
//   secretAccessKey: process.env.AWSSECRET
// });
// var s3 = new AWS.S3({
//   params: {Bucket: process.env.BUCKETNAME}
// });

var database = require('../database/index.js');
var random = require('random-name')
var sentenceGenerator = require('./spaceIpsum.js');
var dateGenerator = require('./randomDate.js');
var imagePicker = require('./imagePicker.js');

// Change number to match number of properties in the SpaceBnB database
var max = 100

// Randomly assign a review to a property in the SpaceBnB database
var randomProperty = function() {
  var num = Math.floor(Math.random() * max + 1);
  return num.toString();
}

// Randomly assign a reviewer's name to the review
var randomName = function() {
  return random();
}

// Randomly assign whether or not the review was last minute
var lastMinute = function() {
  return Math.random() < 0.5;
}

// Randomly assign star values to the review
var randomStars = function() {
  var stars = {};
  stars.cleanliness = Math.floor(Math.random() * 5 + 1);
  stars.communication = Math.floor(Math.random() * 5 + 1);
  stars.checkin = Math.floor(Math.random() * 5 + 1);
  stars.accuracy = Math.floor(Math.random() * 5 + 1);
  stars.location = Math.floor(Math.random() * 5 + 1);
  stars.value = Math.floor(Math.random() * 5 + 1);
  return stars;
}

// Randomly assign a photo to the reviewer
var randomImage = function() {
  return imagePicker.pickImage();
}

// Randomly assign a date to the review
var randomDate = function() {
  return dateGenerator.date();
}

// Fill in the review with random text
var randomText = function() {
  var reviewText = '';
  var sentences = Math.floor(Math.random() * 4 + 1);
  for (var i = 0; i < sentences; i++) {
    var sentence = sentenceGenerator.sentenceGenerator((Math.floor(Math.random() * 5)));
    reviewText += sentence + ' ';
  }
  return reviewText;
}


var createReview = function() {
  var review = {};
  var date = randomDate();
  var stars = randomStars();
  review.date = {};
  review.date.month = date.month;
  review.date.year = date.year;
  review.property = randomProperty();
  review.name = randomName();
  review.image = randomImage();
  review.lastminute = lastMinute();
  review.text = randomText();
  review.stars = randomStars();
  return review;
}

// Create 1000 reviews (change number when necessary)
for (var i = 0; i < 1000; i++) {
  var sampledata = createReview();
  database.saveReview(sampledata);
}