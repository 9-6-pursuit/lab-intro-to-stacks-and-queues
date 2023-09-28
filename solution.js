const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor () {
    this.top = null
  }

  push(data) {
    let newNode = new Node(data);
    if (this.top === null){
      this.top = newNode
    }else {
      newNode.next = this.top
      this.top = newNode
    }
  }

  size() {
    let count = 0;
    let currentNode = this.top
    while(currentNode.next){
      count ++
      currentNode = currentNode.next
    }
    return count;
  }

  pop() {
    let oldTop = this.top
    let newTop = oldTop.next
    return oldTop;
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top.next;
  }

  findMin(num) {
    let currentNode = this.top
    let min = Infinity
    while(currentNode.data < min){
      min = currentNode.data
      currentNode.next
    }
    return min;
  }

}
















module.exports = {
  Node,
  //Queue,
  Stack,
};
