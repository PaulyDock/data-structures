

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (node in this.nodes);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (n in this.nodes) {
    let removedNodeLoc = this.nodes[n].indexOf(node);  
    if (removedNodeLoc > -1) {
      this.nodes[n].splice(removedNodeLoc, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].indexOf(toNode) > -1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let fromLocInToNode = this.nodes[toNode].indexOf(fromNode);
  let toLocInFromNode = this.nodes[fromNode].indexOf(toNode);
  this.nodes[toNode].splice(fromLocInToNode, 1);
  this.nodes[fromNode].splice(toLocInFromNode, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, (key, node) => {
    return cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


