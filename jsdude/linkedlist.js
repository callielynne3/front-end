// Interview Questions

// Stack and Queue in JavaScript
var Node = function(data){
  this.data = data;
  this.previous = null;
}

var Stack = function(){
  this.top = null;
  this.size = 0;
}

Stack.prototype.push = function(data){
  var node = new Node(data);
  node.previous = this.top;
  this.top = node;
  this.size++;
  return this.top;
}

Stack.prototype.pop = function(){
  temp = this.top;
  this.top = this.top.previous;
  this.size--;
  return temp;
}

var Node = function(data){
  this.data = data;
  this.next = null;
}

var Queue = function(){
  this.first = null;
  this.size = 0;
}

Queue.prototype.push = function(data){
  var node = new Node(data);
  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }
  this.size += 1;
  return node;
}

Queue.prototype.shift = function(){
  temp = this.first;
  this.first = this.first.next;
  this.size--;
  return temp;
}

// Priority Queue

// Singly Linked List
var Node = function(value){
  this.value = value;
  this.next = null;
}

var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}

LinkedList.prototype.append = function(value){

}

LinkedList.prototype.contains = function(value){

}

LinkedList.prototype.insert = function(insertValue, searchValue){

}

// Remove a node from Singly Linked List
LinkedList.prototype.delete = function(location){

}

// Find length of a Singly Linked List
LinkedList.prototype.length = function(){
  return this.listLength;
}

// Doubly Linked List
var Node = function(value){
  this.value = value;
  this.next = null;
  this.previous = null;
}

var DoublyLinkedList = function(){
  this.head = null;
  this.tail = null;
  this.listLength = 0;
}

DoublyLinkedList.append = function(value){

}

DoublyLinkedList.contains = function(value){
  
}

// Delete a node from Doubly Linked List
DoublyLinkedList.delete = function(location){
  
}

// Reverse a Singly Linked List
LinkedList.prototype.reverse = function(){
  if (!this.head){
    return;
  }
  var prev = null;
  var current = this.head;
  while (current){
    var next = current.next;   
    current.next = prev; 
    prev = current;
    current = next
  }
  this.head = prev;
  return;
}

// Reverse a Doubly Linked List
DoublyLinkedList.prototype.reverse = function(){
  if(!this.head){
    return;
  }
  var 
}
// Find Kth Node from End
// Delete Kth Node from End

// Detect loop in a Singly Linked List
// Detect the node where loop started
// Find the middle node of a Singly LL

// Check duplicate value in a Singly with loop
// Rotate a Linked list by Kth Node
// Insert node into a sorted LL
// Merge two unsorted Linked Lists
// Find intersect of two Linked List
// sort Linked List
LinkedList.prototype.sort = function(){
  // how do you do bubble sort inside a linkedlist??? 
}
// remove duplicate from unsorted LL
// Create a Circular Linked List
// Check Palindrome in Linked List