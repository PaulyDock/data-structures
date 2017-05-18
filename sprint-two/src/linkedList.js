var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head) { 
      let formerHeadValue = list.head.value;
      list.head = list.head.next;
      return formerHeadValue;
    }
  };

  list.contains = function(target) {
    let queriedNode = list.head;
    while (queriedNode) {
      if (queriedNode.value === target) {
        return true;
      }
      queriedNode = queriedNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail is constant O(1)
  removeHead is constant O(1)
  contains is linear O(n)
 */
