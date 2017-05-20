var Queue = function() {
  var queueModel = {};
  queueModel.queueSize = 0;
  queueModel.storage = {};
  _.extend(queueModel, queueMethods);
  return queueModel;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.queueSize;
};

queueMethods.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
};

queueMethods.dequeue = function() {
  if (this.queueSize > 0) {
    let dequeuedValue = this.storage[1];
    this.shift();
    this.queueSize--;
    return dequeuedValue;
  }
};

queueMethods.shift = function() {
  for (let i = 1; i <= this.queueSize; i++) {
    if (this.storage[i + 1]) {
      this.storage[i] = this.storage[i + 1];
    }
  }
  delete this.storage[this.queueSize];
};

