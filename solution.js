const { nums, words } = require("./data/data.js");
const { inspect } = require("util");
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
	}

	push(data) {
		const newNode = new Node(data);
		newNode.next = this.top;
		this.top = newNode;
	}

	size() {
		let count = 0;
		let current = this.top;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	pop() {
		if (!this.top) {
			return null;
		}
		const data = this.top;
		this.top = this.top.next;
		return data;
	}

	isEmpty() {
		return !this.top;
	}

	findMin() {
		if (!this.top) {
			return null;
		}
		let current = this.top;
		let min = current.data;
		while (current) {
			if (current.data < min) {
				min = current.data;
			}
			current = current.next;
		}
		return min;
	}

	peek() {
		return this.top ? this.top : null;
	}

	// Bonus: Sort the stack in ascending order using only stacks (no arrays or objects)
	sort() {
    const tempStack = new Stack();
    while (!this.isEmpty()) {
      const temp = this.pop().data;
      while (!tempStack.isEmpty() && tempStack.peek().data < temp) {
        this.push(tempStack.pop().data);
      }
      tempStack.push(temp);
    }
    this.top = tempStack.top;
  }

  toList() {
    let current = this.top;
    let list = [];
    while (current) {
        list.push(current.data);
        current = current.next;
    }
    return list;
}
  
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}

	count() {
		let count = 0;
		let current = this.first;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	dequeue() {
		if (!this.first) {
			return null;
		}
		const data = this.first.data;
		this.first = this.first.next;
		if (!this.first) {
			this.last = null;
		}
		return data;
	}

	enqueue(data) {
		const newNode = new Node(data);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
	}

	findMax() {
		if (!this.first) {
			return null;
		}
		let current = this.first;
		let max = current.data;
		while (current) {
			if (current.data > max) {
				max = current.data;
			}
			current = current.next;
		}
		return max;
	}

	getLast() {
		return this.last ? this.last : null;
	}

	isEmpty() {
		return !this.first;
	}

	peek() {
		return this.first ? this.first : null;
	}
}

let wordStack = new Stack();
for (let word of words) {
  wordStack.push(word);
}

module.exports = {
	Node,
	Queue,
	Stack,
};
