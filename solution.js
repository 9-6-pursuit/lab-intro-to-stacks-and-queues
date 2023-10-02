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

  sort() {
    let currentNode = this.top
    
  }

}


//QUEUE 

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = -Infinity;
  }

  enqueue (data) {
    let newItem = new Node(data)
    if (this.first === null){
      this.first = newItem
      this.last = newItem
    }else {
      this.last.next = newItem
      this.first = newItem
    }
    this.size += 1
  }

  dequeue () {
   // const item = this.first
    if (this.first === null){
      throw new Error("The queue is empty")
    }
    if (this.first === this.last){
      this.last.next = null
    }
    if(this.first){
      this.first = this.first.next
    }
    this.size --;
    return this.first;
  }

  count () {
    return this.size;
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

  getLast () {
    return this.last;  
  }

  findMax() {
    let item = this.max
    console.log(item);
    while (this.first !== null){
      if(item < this.first.data)
      item = this.first.data
      this.first = this.first.next
    }
    return item;
  }
  
}













module.exports = {
  Node,
  Queue,
  Stack,
};
