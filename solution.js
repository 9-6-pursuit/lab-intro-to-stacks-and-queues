const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor(){
    this.top = null
  }
  push (data) {
    let newItem = new Node(data)
    newItem.next = this.top
    this.top = newItem
  }
  pop () {
    let oldItem = this.top
    this.top = this.top.next
    return oldItem
  }

  size () {
    let count = 0
    let currentNode = this.top
    while (currentNode) { 
    count += 1
    currentNode = currentNode.next    
  }
    return count
  }

  isEmpty () {
    return !this.top
}

  peek () {
    return this.top
}

findMin() {
  // Initialize the minimum value to positive infinity.
  let min = Infinity;
  
  // Start with the top element of the stack.
  let node = this.top;

  // Iterate through the elements of the stack.
  while (node) {
      // If the data of the current node is smaller than min,
      // update min to the value of the current node's data.
      if (node.data < min) {
          min = node.data;
      }

      // Move to the next element in the stack.
      node = node.next;
  }

  // Return the minimum value found in the stack.
  return min;
}



}


class Queue {
  constructor() {
    this.first = null;    // Initialize the first item in the queue.
    this.last = null;     // Initialize the last item in the queue.
    this.size = 0;        // Initialize the size of the queue.
    this.maxValue = -Infinity; // Initialize the maximum value in the queue.
  }

  // Add an item to the end of the queue. (push)
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // Update the maximum value if needed.
    if (data > this.maxValue) {
      this.maxValue = data;
    }
    return this.size++;
  }

  // Remove and return the item from the front of the queue. (pop)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const removedData = this.first.data;
    this.first = this.first.next;
    this.size--;

    // Update the maximum value if the removed item contained the maximum.
    // if (removedData === this.maxValue) {
    //   this.findMax();
    // }

    return removedData;
  }

  // Return the number of items in the queue.
  count() {
    return this.size;
  }

  // Check if the queue is empty.
  isEmpty() {
    return this.size === 0;
  }

  // Peek at the first item in the queue.
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first;
  }

  // Get the last item in the queue.

  getLast() {
    return this.last
  }

  // Find and update the maximum value in the queue.
  findMax() {
   return this.maxValue
  }

}




module.exports = {
  Node,
  Queue,
  Stack,
};
