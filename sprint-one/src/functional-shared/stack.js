var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackModel = {};
  stackModel.storage = {};
  stackModel.stackSize = 0;
  _.extend(stackModel, Methods);
  return stackModel;
};

var Methods = {};

Methods.size = function() {
  return this.stackSize;
};

Methods.push = function(value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

Methods.pop = function() {
  if (this.stackSize > 0) {
    var poppedValue = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return poppedValue;
  }
};

