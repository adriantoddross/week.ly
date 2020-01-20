const Node = require('./node');

class LinkedList {
  /*
    * The entry point into a Linked List is called the head.
    * The head is a reference to the first node, or null (if the list is empty).
  */
  constructor() {
    this.head = null;
  }

  addFirst(data) {
  // Create a node and prepend it to the beginning of the list
    this.head = new Node(data, this.head);
  }
}