var Queue = function() {
  var queueModel = {};
  queueModel.queueSize = 0;
  queueModel.storage = {};
  _.extend(queueModel, queueMethods);
  return queueModel;
};

var queueMethods = {};

queueMethods.size = function() {
  return queueSize;
};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
};

queueMethods.dequeue = function() {
  let dequeuedValue = this.storage[1];
  this.shift();
  
};

queueMethods.shift = function() {
//  for (let i = 1)
};

