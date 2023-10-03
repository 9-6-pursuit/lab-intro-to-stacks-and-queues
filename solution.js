const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// NODE AKA EACH INDIVIDUAL ELEMENT W/A VALUE & A POINTER TO THE NEXT NODE
class Node {
  // THE CONSTRUCTOR(parameter) initializes the properties and sets up the initial state of the object
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// 1: CREATING PANCAKES DATA STRUCTURE
class Stack {
  constructor(top = null) {
    this.top = top; // FIRST NODE
  }
  //THIS METHOD ADDS A NEW PANCAKE TO TOP OF STACK
  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
  }
  //THIS METHOD RETURNS NUMBER OF PANCAKES IN STACK. TOP/DOWN COUNT
  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  //THIS METHOD REMOVES AND RETURNS THE FIRST PANCAKE IN STACK
  pop() {
    if (this.top === null) return null;
    const current = this.top; // FIRST NODE
    this.top = current.next; // SECOND NODE
    return current;
  }
  //THIS METHOD CHECKS IF THERE ARE ANY PANCAKES
  isEmpty() {
    return this.top === null;
  }
  //THIS METHOD FINDS SMALLEST PANCAKE IN STACK
  findMin() {
    if (this.isEmpty()) return null;
    let min = this.top.data;
    let current = this.top;
    while (current) {
      if (current.data < min) min = current.data;
      current = current.next;
    }
    return min;
  }
  //THIS METHOD RETURNS THE FIRST PANCAKE W/OUT REMOVING FROM STACK
  peek() {
    return this.top;
  }
  //THIS METHOD SORTS PANCAKES IN ASCENDING ORDER
  sort() {
    if (this.isEmpty()) return;
    const auxStack = new Stack();

    while (!this.isEmpty()) {
      const current = this.pop();

      while (!auxStack.isEmpty() && auxStack.peek().data > current.data) {
        this.push(auxStack.pop().data);
      }
      auxStack.push(current.data);
    }
    while (!auxStack.isEmpty()) {
      this.push(auxStack.pop().data);
    }
  }
}
// 2: CREATING TICKET-LINE DATA STRUCTURE
class Queue {
  constructor(maxValue) {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = maxValue;
  }

  count() {
    return this.size;
  }
  //REMOVE FIRST TICKET FROM TICKET-LINE
  dequeue() {
    if (!this.first) return "Queue is empty"; // EDGE-CASE
    if (this.first === this.last) this.last = null;
    const current = this.first;
    this.first = this.first.next;
    this.size--;
    return current.data;
  }
  //ADD TO END OF TICKET-LINE
  enqueue(data) {
    if (this.size === this.maxValue) {
      throw new Error("Queue is full.");
    }
    const newNode = new Node(data);
    if (this.first) this.last.next = newNode;
    else this.first = newNode;
    this.last = newNode;
    this.size++;
  }
//FINDS MAX VALUE 
  findMax() {
    if (this.isEmpty()) return null;
    let max = this.first.data;
    let current = this.first;
    while (current) {
      if (current.data > max) max = current.data;
      current = current.next;
    }
    return max;
  }
//RETURNS LAST TICKET IN TICKET-LINE
  getLast() {
    return this.last;
  }
//IS TICKET-LINE EMPTY
  isEmpty() {
    return this.size === 0;
  }
  //THIS METHOD RETURNS THE FIRST TICKET W/OUT REMOVING FROM TICKET-LINE
  peek() {
    return this.first;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
