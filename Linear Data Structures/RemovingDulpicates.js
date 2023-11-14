class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Solution {
    constructor() {
      this.head = null; // Initialize the head of the linked list
    }
  
    addElement(data) {
      let newNode = new Node(data);
  
      // If the list is empty, set the new node as the head
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    removeDuplicates() {
      if (this.head === null) {
        return; // Nothing to remove in an empty list
      }
  
      let hs = new Set();
      let current = this.head;
      let previous = null;
  
      while (current !== null) {
        let val = current.data;
  
        if (hs.has(val)) {
          previous.next = current.next;
        } else {
          hs.add(val);
          previous = current;
        }
  
        current = current.next;
      }
    }
  
    printList() {
      let curr = t;
      while (curr) {
        console.log(curr.data);
        curr = curr.next;
      }
    }
  }
  
  let s = new Solution();
  s.addElement(1);
  s.addElement(2);
  s.addElement(3);
  s.addElement(3);
  s.addElement(2);
  s.addElement(1);
  s.removeDuplicates();
  s.printList(); // This will print the linked list after adding elements
  