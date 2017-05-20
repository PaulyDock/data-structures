

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuples = this.getTuples(k);
  
  if (!tuples) {
    tuples = [[k, v]];
  } else {
    const location = this.find(k);
    if (location === undefined) {
      tuples.push([k, v]);
    } else {
      tuples[location][1] = v;
    }
  }
  this._storage.set(index, tuples);
};

HashTable.prototype.retrieve = function(k) {
  let tuples = this.getTuples(k);
  const location = this.find(k);
  return location !== undefined ? tuples[location][1] : undefined;
};

HashTable.prototype.remove = function(k) {
  let tuples = this.getTuples(k);
  const location = this.find(k);
  if (location !== undefined) {
    tuples.splice(location, 1);
  }
};

HashTable.prototype.getTuples = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.find = function(k) {
  let tuples = this.getTuples(k);
  for (let i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      return i;
    }
  }
  return undefined;
};

 

/*
 * Complexity: What is the time complexity of the above functions?
 */
