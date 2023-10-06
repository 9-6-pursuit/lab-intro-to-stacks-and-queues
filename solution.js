const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(top = null) {
    this.top = top;
  }

  push(data){
    const newItem = new Node(data);
    newItem.next = this.top;
    this.top = newItem;
  }

  pop(){
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    let item = this.top;
    if (item) {
      let newItem = item.next;
      this.top = newItem;
      return item;
    }
  }

  size(){
    let count = 0;
    let node = this.top;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  isEmpty(){
    return this.top === null;
  }

  peek(){
    if (this.top == null) {
      throw new Error("The stack is empty");
    }
    return this.top;
  }

  findMin(){
    let min = 0;
    let node = this.top;
    
    while (node) {
      if(min > node.data){
        min = node.data
      }
      node = node.next;
    }
    
    return min;
  }

  sort() {
    // stack where the sorted parts are inserted
    const sortedStack = new Stack();
  
    while (!this.isEmpty()) {
      // popped the stack
      const temp = this.pop();
      console.log(temp)

      // sort the popped stack
      while (!sortedStack.isEmpty() && sortedStack.peek().data > temp.data) {
        this.push(sortedStack.pop().data);
      }
      //pushed unsorted stack
      sortedStack.push(temp.data);
    }
  
    while (!sortedStack.isEmpty()) {
      this.push(sortedStack.pop().data);
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.max = null;
  }

  enqueue(data){
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

  dequeue(){
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

  isEmpty(){
    return this.first === null;
  }

  peek(){
    if (this.first == null) {
      throw new Error("The queue is empty");
    }
    return this.first;
  }
  
  getLast(){
    if (this.last === null) {
      throw new Error("The queue is empty");
    }
    return this.last;
  }
  
  findMax(){
    let max = 0;
    let node = this.first;
    
    while (node) {
      if(max < node.data){
        max = node.data
      }
      node = node.next;
    }
    
    return max;
  }

}
module.exports = {
  Node,
  Queue,
  Stack,
};
