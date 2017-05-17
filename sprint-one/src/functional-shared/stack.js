var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stackModel = {};
  stackModel.storage = {};
  stackModel.stackSize = 0;
  extend(stackModel, Stack.stackMethods);
  return stackModel;
};

// let extend = function(objToExtend, fromObj) {
//   for (let key in fromObj) {
//     objToExtend[key] = fromObj[key];
//   }
// };


Stack.stackMethods = {};

Stack.stackMethods.size = function() {
  return this.stackSize;
};

Stack.stackMethods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

Stack.stackMethods.pop = function() {
  if (this.stackSize > 0) {
    const poppedValue = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return poppedValue;
  }
};

