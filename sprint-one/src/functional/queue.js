var Queue = function() {
  var someInstance = {};
  var storage = {};
  var queueSize = 0;

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
