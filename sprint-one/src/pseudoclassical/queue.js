var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.queueSize++;
  this.storage[this.queueSize] = value;
};


Queue.prototype.dequeue = function() {
  if (this.queueSize > 0) {
    let dequeuedValue = this.storage[1];
    this.shift();
    this.queueSize--;
    return dequeuedValue;
  }
};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.shift = function() {
  for (let i = 1; i <= this.queueSize; i++) {
    if (this.storage[i + 1]) {
      this.storage[i] = this.storage[i + 1];
    }
  }
  delete this.storage[this.queueSize];
};