var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let children = this.children;
  if (this.value === target) {
    return true;
  }
  if (children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild - O(1) constant
  contains - O(n) linear
 */
