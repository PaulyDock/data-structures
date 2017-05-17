var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  var storage = {};

  someInstance.push = function(value) {
    stackSize++;
    storage[stackSize] = value;  
  };

  someInstance.pop = function() {
    let poppedValue = storage[stackSize];
    delete storage[stackSize];
    stackSize--;
    return poppedValue;
  };

  someInstance.size = function() {
  return stackSize;
  };

  return someInstance;
};
