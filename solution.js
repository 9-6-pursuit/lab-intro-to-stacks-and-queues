const { nums, words } = require("./data/data.js");
const { inspect } = require("util");


class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  pop() {
    if (!this.top) return null;

    const valueToReturn = this.top.data;
    this.top = this.top.next;
    return valueToReturn;
  }

  isEmpty() {
    return !this.top;
  }

  findMin() {
    if (!this.top) return null;

    let min = this.top.data;
    let currentNode = this.top;
    while (currentNode) {
      if (currentNode.data < min) min = currentNode.data;
      currentNode = currentNode.next;
    }
    return min;
  }

  peek() {
    return this.top ? this.top.data : null;
  }
}


class QueNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = null;  
  }

  count() {
    return this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const valueToReturn = this.first.data;

    this.first = this.first.next;
    if (!this.first) {
      this.last = null;  
    }
    
    
    this.size--;
    if (this.maxValue === valueToReturn) {
      this.findMax();
    }
    return valueToReturn;
  }

  enqueue(data) {
    const newNode = new QueNode(data);
    if (this.last) {
      this.last.next = newNode;
    } else {
      this.first = newNode; 
    }
    this.last = newNode;

    this.size++;
    if (this.maxValue === null || data > this.maxValue) {
      this.maxValue = data;
    }
  }

  findMax() {
    if (!this.first) {
      this.maxValue = null;
      return null;
    }

    let max = this.first.data;
    let currentNode = this.first;
    while (currentNode) {
      if (currentNode.data > max) max = currentNode.data;
      currentNode = currentNode.next;
    }
    this.maxValue = max;
    return max;
  }

  getLast() {
    return this.last ? this.last.data : null;
  }

  isEmpty() {
    return !this.first;
  }

  peek() {
    return this.first ? this.first.data : null;
  }
}



module.exports = {
  Node,
  Queue,
  Stack,
};
