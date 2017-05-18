var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackModel = Object.create(stackMethods);
  stackModel.storage = {};
  stackModel.stackSize = 0;
  return stackModel;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

stackMethods.size = function() {
  return this.stackSize;
};

stackMethods.pop = function() {
  if (this.stackSize > 0) {
    let poppedItem = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return poppedItem;
  }
};