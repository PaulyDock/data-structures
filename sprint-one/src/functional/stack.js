//const _ = require('../../../lib/underscore/underscore');
//var _ = require('/c/Users/Paul Dockery/dev/hack-reactor/junior/hrsf78-data-structures/lib/underscore');

var Stack = function() {
  var someInstance = {};
  var storage = {};
  var stackSize = 0;

  someInstance.push = function(value) {
    storage[stackSize.toString()] = value;
    stackSize++;    
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