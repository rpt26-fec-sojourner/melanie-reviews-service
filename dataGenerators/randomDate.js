var months = [
  {name: 'January', number: 1},
  {name: 'February', number: 2},
  {name: 'March', number: 3},
  {name: 'April', number: 4},
  {name: 'May', number: 5},
  {name: 'June', number: 6},
  {name: 'July', number: 7},
  {name: 'August', number: 8},
  {name: 'September', number: 9},
  {name: 'October', number: 10},
  {name: 'November', number: 11},
  {name: 'December', number: 12}
]

var years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
]

var date = function() {
  var month = months[Math.floor(Math.random() * months.length)];
  var year = years[Math.floor(Math.random() * years.length)];
  return {month: month, year: year};
}

module.exports.date = date;