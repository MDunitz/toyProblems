// Tree Mapping
// Implement a map method on this Tree class.

// Map accepts a mapping function as its only argument. It traverses the tree, passing each node’s value into the mapping function, and generates a new tree containing the results.

// So map should return a tree with the same structure, and different values, but it should NOT modify the tree that was passed in.

//basic tree - stores a value
var Tree = function(value){
  this.value = value;
  this.children = [];
}

Tree.prototype.map = function(callback) {
  var newTree = new Tree(callback(this.value));
  this.children.forEach(function(child){
    var newChild = child.map(callback);
    newTree.addChild(newChild);
  });
  return newTree;
}


//add an immediate child, wrapping values in tree nodes if needed
Tree.prototype.addChild = function(child){
  //what is ! child doing here?
  if(! child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if( ! this.isDescendant(child)){
    this.children.push(child);
  } else {
    //The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
    //new Error creates an error object 
    throw new Error("That child is already a child of this tree")
  } 
  return child;
};

//check if provided tree is already a child of this tree or any of its subtrees 

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child)!==-1){
    return true;
  }else {
    for(var i = 0; i< this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        return true;
      }
    }
    return false;
  }
};

//remove a child

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    this.children.splice(index, 1);
  }
  else{
    throw new Error('That node is not an immediate child of this tree');
  }
};












