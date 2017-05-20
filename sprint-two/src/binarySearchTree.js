var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(binarySearchTreePrototype);

  binarySearchTree.left = null;
  binarySearchTree.right = null;
  binarySearchTree.value = value;

  return binarySearchTree;
};

var binarySearchTreePrototype = {};

binarySearchTreePrototype.insert = function(value) {
  //console.log('pre-insert - ', this.left, this.right);
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

binarySearchTreePrototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

binarySearchTreePrototype.depthFirstLog = function(callback) {
  callback(this.value);  
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

//BinaryTree = new BinarySearchTree(5);
//console.log(BinaryTree.contains(5));



/*
 * Complexity: What is the time complexity of the above functions?
 */
