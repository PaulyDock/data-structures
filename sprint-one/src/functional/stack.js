var Stack = function() {
  var someInstance = {};
  var storage = {};
  var stackSize = 0;

  someInstance.push = function(value) {
    stackSize++;
    storage[stackSize] = value;
  };

  someInstance.pop = function() {
    if (stackSize > 0) {
      let poppedValue = storage[stackSize];
      delete storage[stackSize];
      stackSize--;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };
  
  return someInstance;
};
