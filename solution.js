// Import necessary modules and data from external files
const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

// Define a Node class for building a linked list
class Node {
  constructor(data) {
    this.data = data; // The data stored in the node
    this.next = null; // Reference to the next node (initially null)
  }
}

// Define a Stack class using a linked list implementation
class Stack {
  constructor(top = null) {
    this.top = top; // Reference to the top node (initially null)
  }

  // Push a new item onto the stack
  push(data) {
    let newItem = new Node(data); // Create a new node with the given data
    newItem.next = this.top; // Set the new node's next reference to the current top
    this.top = newItem; // Update the top reference to the new node
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Peek at the top item of the stack (without removing it)
  peek() {
    return this.top;
  }

  // Pop the top item from the stack and return it
  pop() {
    let oldTop = this.top; // Store a reference to the current top
    this.top = this.top.next; // Update the top reference to the next node
    return oldTop; // Return the old top node
  }

  // Calculate the size of the stack
  size() {
    let count = 0;
    let currentNode = this.top;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }

  // Find the minimum value in the stack
  findMin() {
    if (this.isEmpty()) {
      return null; // Return null if the stack is empty
    }

    let currentNode = this.top;
    let minValue = currentNode.data; // Assume the first item as the minimum value

    while (currentNode) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data; // Update minValue if a smaller value is found
      }
      currentNode = currentNode.next; // Move to the next node
    }

    return minValue; // Return the minimum value found in the stack
  }
}

// Define a Queue class using a linked list implementation
class Queue {
  constructor() {
    this.first = null; // Reference to the first node (initially null)
    this.last = null; // Reference to the last node (initially null)
    this.size = 0; // Initialize the size of the queue to 0
  }

  // Enqueue (add) an item to the end of the queue
  enqueue(data) {
    let newItem = new Node(data); // Create a new node with the given data
    if (!this.first) {
      this.first = newItem; // If the queue is empty, set both first and last to the new node
      this.last = newItem;
    } else {
      this.last.next = newItem; // Link the last node to the new node
      this.last = newItem; // Update the last reference to the new node
    }
    return ++this.size; // Increment and return the size of the queue
  }

  // Check if the queue is empty
  isEmpty() {
    return this.first === null;
  }

  // Dequeue (remove) an item from the front of the queue and return it
  dequeue() {
    if (this.first == null) {
      throw new Error("The queue is empty"); // Throw an error if the queue is empty
    }
    const item = this.first; // Store a reference to the first item
    if (this.first === this.last) {
      this.last = null; // If it's the last item, set last to null
    }
    this.first = this.first.next; // Update the first reference to the next node
    this.size--; // Decrement the size of the queue
    return item.data; // Return the data of the removed item
  }

  // Peek at the front item of the queue (without removing it)
  peek() {
    if (this.first == null) {
      throw new Error("The queue is empty"); // Throw an error if the queue is empty
    }
    return this.first; // Return the first node
  }

  // Return the current size of the queue
  count() {
    return this.size;
  }

  // Find the maximum value in the queue
  findMax() {
    if (this.isEmpty()) {
      throw new Error("The queue is empty"); // Throw an error if the queue is empty
    }

    let max = this.first.data; // Assume the first item as the maximum value
    let current = this.first.next; // Start from the second item

    while (current !== null) {
      if (current.data > max) {
        max = current.data; // Update max if a larger value is found
      }
      current = current.next; // Move to the next node
    }

    return max; // Return the maximum value found in the queue
  }
}

// Export the Node, Queue, and Stack classes for use in other modules
module.exports = {
  Node,
  Queue,
  Stack,
};