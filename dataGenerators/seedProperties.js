var database = require('../database/index.js');

for (var i = 1; i < 101; i++) {
  database.saveProperty(i);
}