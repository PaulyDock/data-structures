var BinarySearchTree = function(value) {
  this.left = {};
  this.right = {};
};


BinarySearchTree.prototype.insert = function(value) {
  if (this.nodeValue) {
    if (value > this.nodeValue) {
      this.insert(this.right);
    } else {
      this.insert(this.left);
    }
  } else {
  }
};


BinarySearchTree.prototype.contains = function(value) {

};


BinarySearchTree.prototype.depthFirstLog = function(callback) {

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
