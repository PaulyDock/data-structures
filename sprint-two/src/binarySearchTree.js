var BinarySearchTree = function(value) {
  this.left = {};
  this.right = {};
  this.nodeValue = value;
};

BinarySearchTree.prototype.insert = function(value) {
  console.log('pre-insert - ', this.left, this.right);
  if (value > this.nodeValue) {
    if (this.right.nodeValue === undefined) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left.nodeValue === undefined) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  if (this.nodeValue === undefined) {
    return false;
  } else if (this.nodeValue === value) {
    return true;
  } else if (value > this.nodeValue) {
    return this.right.contains(value);
  } else {
    return this.left.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
};

//BinaryTree = new BinarySearchTree(5);
//console.log(BinaryTree.contains(5));



/*
 * Complexity: What is the time complexity of the above functions?
 */
