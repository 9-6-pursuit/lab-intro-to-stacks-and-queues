const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}
class Stack {
  constructor(top = null) {
    this.top = top
    
  }
  push(data) {
    let newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }
  isEmpty() {
    return this.top === null;
  }
  peek() {
    return this.top
  }
  pop() {
    let oldTop = this.top
    this.top = this.top.next
    return oldTop
  }
  size() {
    let count = 0
    let currentNode =this.top
    while(currentNode) {
        count += 1
        currentNode = currentNode.next

    }
    return count
  }
  findMin() {
    if (this.isEmpty()) {
      return null; 
    }

    let currentNode = this.top;
    let minValue = currentNode.data;

    while (currentNode) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }

    return minValue;
  }
  
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0
  }
  enqueue(data) {
    let newItem = new Node(data);
    if (!this.first) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.last = newItem;
    }
    return ++this.size;
  }
  isEmpty() {
    return this.first === null;
  }
  dequeue() {
      if (this.first == null) {
        throw new Error("The queue is empty");
      }
      const item = this.first;
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return item.data;
    }
    peek() {
      if (this.first == null) {
        throw new Error("The queue is empty");
      }
      return this.first;
    }
    count() {
      return this.size;
    }
    getLast() {
      if (this.last === null) {
        throw new Error("The queue is empty");
      }
      return this.last;
    }
    findMax() {
      if (this.isEmpty()) {
        throw new Error("The queue is empty");
      }
  
      let max = this.first.data;
      let current = this.first.next;
  
      while (current !== null) {
        if (current.data > max) {
          max = current.data;
        }
        current = current.next;
      }
  
      return max;
    }
    
}


module.exports = {
  Node,
  Queue,
  Stack,
};
