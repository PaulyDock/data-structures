//const _ = require('../../../lib/underscore/underscore');
//var _ = require('/c/Users/Paul Dockery/dev/hack-reactor/junior/hrsf78-data-structures/lib/underscore');

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
  //return objLength(storage);
    let count = 0;
    for (prop in storage) {
      if (storage.hasOwnProperty(prop)) {
        count++;
      }
    }
    return count;
  };

  return someInstance;
};


var objLength = function(obj) {
  let count = 0;
  _.each(obj, () => count++);
  return count;
};