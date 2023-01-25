/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');

var func = require('./promiseConstructor.js');
var func1 = require('./promisification.js');



var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  return func.pluckFirstLineFromFileAsync(readFilePath)
    .then( (user) =>{
      //console.log('user', user);
      return func1.getGitHubProfileAsync(user);
    })
    .then((body)=>{
      //console.log('body', body);
      return fs.writeFileSync(writeFilePath, JSON.stringify(body));
    })
    .catch( (err)=>{
      console.log('reading file error', err.message);
    });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
