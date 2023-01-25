/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath) {
  // TODO
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        var lines = data.split(/\r?\n/);
        resolve(lines[0]);
      }
    });
  });

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {
  // TODO
  return new Promise((resolve, reject) => {
    request.get(url, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });
};

// var result = 5;
// getStatusCodeAsync().then(function () {
//   result += 5;
//   console.log('result then1', result);
// })
//   .catch(function () {
//     result += 10;
//     console.log('result catch1', result);
//   })
//   .then(function () {
//     result += 15;
//     console.log('result then2', result);
//   })
//   .catch(function () {
//     result += 20;
//     console.log('result catch2', result);
//   });
// result = 10;
// console.log('result', result);
var result = null;

getStatusCodeAsync()
  .catch(function (a) {
    return 'one';
  })
  .then(function (b) {
    console.log('b', b);
    return b + '-two';
  })
  .then(function (c) {
    console.log('c', c);
    return c + '-three';
  })
  .catch(function (d) {
    console.log('d', d);
    return d + '-four';
  })
  .then(function (val) {
    console.log('val', val);
    result = val;
  });
console.log('result', result);

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};




