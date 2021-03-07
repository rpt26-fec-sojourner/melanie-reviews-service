require("dotenv").config();


var createImageArray = function() {
  var images = [];
  for (var i = 1; i < 61; i++) {
    var url = process.env.URL60 + i + '.jpeg';
    images.push(url);
  }
  for (var j = 1; j < 14; j++) {
    var url = process.env.URL13 + j + '.jpg';
    images.push(url);
  }
  return images;
}

var pickImage = function() {
  var imageArray = createImageArray();
  var imageURL = imageArray[Math.floor(Math.random() * imageArray.length)];
  return imageURL;
}

module.exports.pickImage = pickImage;