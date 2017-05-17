var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackModel = {};
  stackModel.storage = {};
  stackModel.stackSize = 0;
  _.extend(stackModel, methods);
  return stackModel;
};


var methods = {};

methods.size = function() {
  return this.stackSize;
};

methods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

methods.pop = function() {
  if (this.stackSize > 0) {
    var poppedValue = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return poppedValue;
  }
};

