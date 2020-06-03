/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      cb(err);
    } else {
      var index = data.indexOf('\n');
      var firstLine = index !== -1 ? data.slice(0, index) : data;
      cb (null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  // TODO
  request.get(url, (err, reponse, body) => {
    if (err) {
      cb(err);
    } else {
      cb(err, reponse.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
