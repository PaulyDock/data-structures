var Queue = function() {
  var someInstance = {};
  var storage = {};
  var queueSize = 0;

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[queueSize.toString()] = value;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
