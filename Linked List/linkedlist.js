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

  insertBefore(key, toInsert) {
    if (this.head === null) return null;

    if (this.head.value === key) {
      this.addFirst(toInsert);
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== key) {
      previous = current;
      current = current.next;
    }

    if (current !== null) {
      previous.next = new Node(toInsert, current);
    }
  }

  remove(key) {
    // If the list is empty, throw an error.
    if (this.head === null) throw new Error('Cannot delete');
    
    // If we're deleting the head, replace it & exit the function.
    if (this.head.value === key) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null & current.data !== key) {
      previous = current;
      current = current.next;
    }

    // If the node is not in the list, throw an error.
    if (current === null) {
      throw new Error('Cannot delete');
    }

    // Delete current node.
    previous.next = current.next;
  }
}

module.export = LinkedList;