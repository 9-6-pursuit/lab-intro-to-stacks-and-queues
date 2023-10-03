const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(data){
    this.top = null
  }

  push(data){
    let newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
  }

  size(){
    let currentSize = 0
    let currentNode = this.top
    while(currentNode){
      currentNode = currentNode.next
      currentSize += 1
    }
    return currentSize
  }
  
  pop() {
    if (this.top === null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }
  isEmpty(){
    return this.top === null;
  }
  
  findMin(){
    let currentNode = this.top
    let min = Infinity
    while(currentNode){
      if(currentNode.data < min){
        min = currentNode.data
      }
      currentNode = this.next
    }
    return min
  }
  
  peek(){
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }
  
}

  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
      this.max = -Infinity
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
    if(this.max < newItem.data){
      this.max = newItem.data
    }
    return ++this.size;
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

  count(){
    return this.size
  }
  isEmpty() {
    return this.first === null;
  }
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  getLast(){
    return this.last
  }
  findMax(){
    return this.max
  }
}




module.exports = {
  Node,
  Queue,
  Stack,
};
