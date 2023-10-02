const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// Node class for Stack and Queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null;
    this.count = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.count--;
    return removedNode;
  }
  

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    // if (this.isEmpty()) {
    //   return null;
    // }
    return this.top;
  }

  findMin() {
    if (this.isEmpty()) {
      return null;
    }
    let minValue = this.top.data;
    let currentNode = this.top;
    while (currentNode !== null) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return minValue;
  }

  sort() {
    const tempStack = new Stack();
  
    while (!this.isEmpty()) {
      const temp = this.pop();
  
      // Move elements from the temporary stack to the original stack
      while (!tempStack.isEmpty() && tempStack.peek().data > temp) {
        this.push(tempStack.pop().data);
      }
  
      // Push the current element onto the temporary stack
      tempStack.push(temp);
    }
  
    // Move elements back to the original stack to maintain the minimum on top
    while (!tempStack.isEmpty()) {
      this.push(tempStack.pop().data);
    }
  }
  
}

// Queue class
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.first;
    this.first = this.first.next;
    this.count--;
    if (this.count === 0) {
      this.last = null;
    }
    return removedNode.data;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  peek() {
    // if (this.isEmpty()) {
    //   return null;
    // }
    return this.first;
  }

  getLast() {
    // if (this.isEmpty()) {
    //   return null;
    // }
    return this.last;
  }

  findMax() {
    if (this.isEmpty()) {
      return null;
    }
    let maxValue = this.first.data;
    let currentNode = this.first;
    while (currentNode !== null) {
      if (currentNode.data > maxValue) {
        maxValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
    return maxValue;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};

