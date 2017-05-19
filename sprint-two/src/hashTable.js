

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var formerTuples = this.retrieve(k);
  console.log('inserting ', formerTuples, index, [k, v]);
  if (!formerTuples) {  
    this._storage.set(index, [[k, v]]);
  } else {
    formerTuples.push([k, v]);
    this._storage.set(index, formerTuples);
  }
  console.log('get after insert', this._storage.get(index));
  //console.log('inserting ', formerTuples, index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrievedBucket = this._storage.get(index);
  console.log('retrieving ', index, retrievedBucket);
  if (retrievedBucket) {
    for (let i = 0; i < retrievedBucket.length; i++) {
      if (retrievedBucket[i][0] === k) {
        console.log('retrieved ', retrievedBucket[i][1]);
        return retrievedBucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

HashTable.prototype.tupleLookup = function(v) {
  

};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };
*/
