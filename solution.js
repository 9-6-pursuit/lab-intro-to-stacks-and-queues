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

module.exports = {
  Node,
  Queue,
  Stack,
};
