/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
const fs = require('fs');
const Promise = require('bluebird');

var pf = require('../bare_minimum/promisification');
var pc = require('../bare_minimum/promiseConstructor'); // pluckFirstLineFromFileAsync
var fsPromisify = Promise.promisifyAll(fs);

var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  let pathContents = [];
  for (let i = 0; i < filePaths.length; i++) {
    pathContents.push(pc.pluckFirstLineFromFileAsync(filePaths[i]));
  }
  return Promise.all(pathContents)
    .then((data) => {
      return fsPromisify.writeFileAsync(writePath, data.join('\n'));
    });
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};