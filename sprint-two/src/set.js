var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) > -1;
};

setPrototype.remove = function(item) {
  let itemLoc = this._storage.indexOf(item);
  if (itemLoc > -1) {
    this._storage.splice(itemLoc, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
