var Stack = function() {
  var someInstance = {};
<<<<<<< HEAD
=======
  var stackSize = 0;
>>>>>>> 4b2ec3bf8741cb2ee01a6614e8a44f4f6caee685
  var storage = {};
  var stackSize = 0;

  someInstance.push = function(value) {
    stackSize++;
<<<<<<< HEAD
    storage[stackSize.toString()] = value;
=======
    storage[stackSize] = value;  
>>>>>>> 4b2ec3bf8741cb2ee01a6614e8a44f4f6caee685
  };

  someInstance.pop = function() {
    if (stackSize > 0) {
<<<<<<< HEAD
      let poppedValue = storage[stackSize.toString()];
      delete storage[stackSize.toString()];
=======
      let poppedValue = storage[stackSize];
      delete storage[stackSize];
>>>>>>> 4b2ec3bf8741cb2ee01a6614e8a44f4f6caee685
      stackSize--;
      return poppedValue;
    }
  };

  someInstance.size = function() {
    return stackSize;
  };
  
  return someInstance;
};
