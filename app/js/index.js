/* styling */
require('styles/main.scss');

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    this.head
      ? this.head.prev = newNode
      : this.tail = newNode;
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    this.tail
      ? this.tail.next = newNode
      : this.head = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) return null;

    const val = this.head.value;
    this.head = this.head.next;

    this.head
      ? this.head.prev = null
      : this.tail = null;

    return val;
  }

  removeTail() {
    if (!this.tail) return null;

    const val = this.tail.value;
    this.tail = this.tail.prev;

    this.tail
      ? this.tail.next = null
      : this.head = null;

    return val;
  }

  search(searchValue) {
    const currentNode = this.head;

    const evaluateNodes = (node) => {
      if (node !== null) {
        if (searchValue === node.value) {
          return node.value;
        }
        return evaluateNodes(node.next);
      } else {
        return `El valor no fue encontrado: ${node}`;
      }
    }

    return evaluateNodes(currentNode);
  }

  indexOf(value) {
    const currentNode = this.head;
    let currentIndex = 0;
    let indexList = [];

    const evaluateNodes = (node) => {
      if (!node) return null;
      
      if (value === node.value) {
        indexList.push(currentIndex);
      }
      currentIndex++;
      return evaluateNodes(node.next);
    }

    evaluateNodes(currentNode)

    return indexList;
  }
}

const LL = new LinkedList();
LL.addToHead(8);
LL.addToHead(3);
LL.addToHead(5);
LL.addToHead(3);
LL.addToTail(5);
LL.addToTail(3);

console.log(LL.indexOf(3));