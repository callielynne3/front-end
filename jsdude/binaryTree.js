// Binary Search Tree Questions 

// How would you create a binary search tree?
var Node = function(value){
  this.value = value; 
  this.rightChild = null;
  this.leftChild = null;
}
        
// Create a constructor for binary search tree?
var Tree = function(){
  this.root = null; 
  this.size = 0;
}
    
// Now you need to understand the structure of a binary search tree. For every node value in the left is smaller than the value of the node and value at the right is higher than the value of the root.

// so while inserting a value you have to find the appropriate location
binarySearchTree.prototype.insert = function(insertVal) {
  if (this.root === null) {
    this.root = new node(insertVal);
    this.size++;
    return;
  } else {
    var traverse = function(currentNode) {
      if (insertVal > currentNode.value) {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.rightChild);
        }
      } else {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = new node(insertVal);
          return;
        } else {
          traverse(currentNode.leftChild);
        }
      }
    }
    traverse(this.root);
    this.size++;
  }
};

// search
binarySearchTree.prototype.search = function(searchVal) {
  var check = false;
  var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value === searchVal) {
      check = true;
      return;
    }
    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
  }
  traverse(this.root);
  return check;
};

// delete
binarySearchTree.prototype.delete = function(removeVal) {
   var temp = [];
   var traverse = function(currentNode) {
    if (currentNode === null) {
      return;
    } else if (currentNode.value !== removeVal) {
      temp.push(currentNode.value);
    }
    traverse(currentNode.rightChild);
    traverse(currentNode.leftChild);
   }
   traverse(this.root);
   if (temp.lenght === this.size) {
    console.log("there is no such value to delete");
    return;
   }
   this.root = null;
   this.size = 0;
   var toInsert;
   for (var i = 0; i < temp.length; i++) {
    toInsert = temp[i];
    this.insert(toInsert);
   }
   return temp;
};
      
// Breadth First Search
binarySearchTree.prototype.breadthFirst = function(){
  var queue = [];
  var result = [];
  var cNode;
  queue.push(this.root);
  while (queue.length > 0) {
    cNode = queue.shift();
    if (cNode.leftChild !== null) {
      queue.push(cNode.leftChild);
    }
    if (cNode.rightChild !== null) {
      queue.push(cNode.rightChild);
    }
    result.push(cNode.value);
  }
  return result;
}

// Depth first search

// In order
binarySearchTree.prototype.inOrder = function() {
  var result = [];
  var traverse = function(cNode){
    if(cNode === null) {
     return;
    }
    traverse(cNode.leftChild);
    result.push(cNode.value);
    traverse(cNode.rightChild);
  }
  traverse(this.root);
  return result;
}


// Pre order 
binarySearchTree.prototype.preOrder = function(){
  var result = [];
  var traverse = function(cNode) {
    if (cNode === null) {
     return;
    }
    result.push(cNode.value);
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);
  }
  traverse(this.root);
  return result;
}

// Post order
binarySearchTree.prototype.postOrder = function(){
  var result = [];
  var traverse = function(cNode){
    if (cNode === null) {
     return;
    }
    traverse(cNode.leftChild);
    traverse(cNode.rightChild);
    result.push(cNode.value);
  }
  traverse(this.root);
  return result;
}
        
// How can you find the min value in a bst

// How can you find the max value in a bst

// What is balanced and unbalanced tree
// The left and right subtrees' heights differ by at most one, AND
// The left subtree is balanced, AND
// The right subtree is balanced
// ref: Get answer from here

// Check a binary tree is BST or not?

// Height of a tree

// print ancestor

// Print all nodes between two nodes

// common ancestor