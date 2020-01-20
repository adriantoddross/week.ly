const Node = require('./node');

class LinkedList {
  /*
    * The entry point into a Linked List is called the head.
    * The head is a reference to the first node, or null (if the list is empty).
  */
  constructor() {
    this.head = null;
  }

  addFirst(item) {
  // Create a node and prepend it to the beginning of the list
    this.head = new Node(item, this.head);
  }

  traverse() {
  // Start with the head and access each node until you reach null.  
    let tempNode = this.head;
    
    while (tempNode !== null) {
      tempNode = tempNode.next;
    }
  }

  addLast(item) {
  // Travserse to the end of the list, stop at the last node, then add a new node.

    if (this.head === null) {
      // If the list is empty, just make it the head.
      this.addFirst(item);
    } else {
      let tempNode = this.head;

      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }

      tempNode = new Node(item, null);
    }
  }

  insertAfter(key, toInsert) {
    // Find an element then insert a new node after it.
    let tempNode = this.head;

    while (tempNode !== null && tempNode.value !== key) {
      // Traverse until we find a match.
      tempNode = tempNode.next;
    }

    if (tempNode !== null) {
      // Insert a new node after our match, then point to the following node
      tempNode.next = new Node(toInsert, tempNode.next);
    }
  }
}

module.export = LinkedList;