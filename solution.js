const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
console.log("Connected!!")
class Node {
  constructor(data){
    this.top = data
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
      currentSize += 1
    }
    return currentSize
  }
  
  pop(){

  }
  
  isEmpty(){

  }
  
  findMin(){

  }
  
  peek(){

  }
  
}





module.exports = {
  Node,
  //Queue,
  Stack,
};
