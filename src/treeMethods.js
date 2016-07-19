



var Tree = function(value){
  this.value = value;
  this.children = [];
};


//Implement a depth-first method on a tree class.

//DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

Tree.prototype.DFSelect = function(filter, depth){
  if(!depth){
    depth = 0;
  }
  var holding = [];
  if(filter(this.value, depth)){
    holding.push(this.value);
  }
  for(var i =0; i< this.children.length; i++){
    var currNode = this.children[i];
    var child = currNode.DFSelect(filter, depth+1);
    holding = holding.concat(child)
  }
  return holding;
}

// Implement a map method on this Tree class.

// Map accepts a mapping function as its only argument. It traverses the tree, passing each node’s value into the mapping function, and generates a new tree containing the results.

// So map should return a tree with the same structure, and different values, but it should NOT modify the tree that was passed in.
Tree.prototype.map = function(callback) {
  var newTree = new Tree(callback(this.value));
  this.children.forEach(function(child){
    var newChild = child.map(callback);
    newTree.addChild(newChild);
  });
  return newTree;
}

// Implement the countLeaves function in this Tree class.

// A leaf node is any node in the tree that has no children. countLeaves should
// traverse the tree, and return the number of leaf nodes the tree contains.

Tree.prototype.countLeaves = function(){
  var leaves = 0;
  if(this.children.length===0){
    leaves ++;
  }
  for(var i = 0; i<this.children.length; i++){
    var currChild = this.children[i];
    var childLeaves = currChild.countLeaves();
    leaves+=childLeaves;
  }
  return leaves
}

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};