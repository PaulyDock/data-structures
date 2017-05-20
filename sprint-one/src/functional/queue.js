var Queue = function() {
  var someInstance = {};
  var storage = {};
  var queueSize = 0;
<<<<<<< HEAD

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[queueSize.toString()] = value;
=======

  someInstance.shift = function() {
    for (let i = 1; i <= queueSize; i++) {
      if (storage[i + 1]) {
        storage[i] = storage[i + 1];
      }
    }
    delete storage[queueSize];
  };

  someInstance.enqueue = function(value) {
    queueSize++;
    storage[queueSize] = value;
>>>>>>> 4b2ec3bf8741cb2ee01a6614e8a44f4f6caee685
  };

  someInstance.dequeue = function() {
    if (queueSize > 0) {
      let dequeuedItem = storage[1];
      someInstance.shift();
      queueSize--;
      return dequeuedItem;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
