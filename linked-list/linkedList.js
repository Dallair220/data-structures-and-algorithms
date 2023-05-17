import Node from './node.js';

// LinkedList factory, which represents the full list.
export default function LinkedList(headNode = null) {
  // append(value) adds a new node containing value to the end of the list
  function append(value) {
    // WHY is headNode undefined and not NULL?
    if (this.headNode === undefined) {
      this.headNode = Node(value);
      return;
    }
    // get to the end of the list and set its nextNode to the new node
    let tmpNode = this.headNode;
    while (tmpNode.nextNode !== null) {
      tmpNode = tmpNode.nextNode;
    }
    return (tmpNode.nextNode = Node(value));
  }

  // prepend(value) adds a new node containing value to the start of the list
  function prepend(value) {
    // new node is headNode and it's next node is the old headNode
    return (this.headNode = Node(value, this.headNode));
  }

  // size returns the total number of nodes in the list
  function size() {
    let listSize = 0;
    let tmpNode = this.headNode;
    while (tmpNode !== null) {
      listSize += 1;
      tmpNode = tmpNode.nextNode;
    }
    return listSize;
  }

  // head returns the first node in the list
  function head() {
    return this.headNode;
  }

  // tail returns the last node in the list
  function tail() {
    let tmpNode = this.headNode;
    // get to last node
    while (tmpNode.nextNode !== null) {
      tmpNode = tmpNode.nextNode;
    }
    return tmpNode;
  }

  // at(index) returns the node at the given index
  function at(index) {
    let indexNode = this.headNode;
    // get to node at index
    for (let i = 0; i < index; i += 1) {
      if (indexNode === null) return null;
      indexNode = indexNode.nextNode;
    }
    return indexNode;
  }

  // pop removes the last element from the list
  function pop() {
    // if pop at listSize = 0
    if (this.headNode === null) return null;
    // if pop at listSize = 1
    if (this.headNode.nextNode === null) return (this.headNode = null);

    let preLastNode = this.headNode;
    // get to element which is 1 before the tail, to then remove the .next to it
    while (preLastNode.nextNode.nextNode !== null) {
      preLastNode = preLastNode.nextNode;
    }
    return (preLastNode.nextNode = null);
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  function contains(valueToFind) {
    // Same here. Why is headNode undefined and not null?
    if (this.headNode === undefined) return false;

    let tmpNode = this.headNode;
    while (tmpNode !== null) {
      if (tmpNode.value === valueToFind) return true;
      tmpNode = tmpNode.nextNode;
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  function find(valueToFind) {
    let index = -1;
    // Same here. Why is headNode undefined and not null?

    let tmpNode = this.headNode;
    while (tmpNode !== null) {
      index += 1;
      if (tmpNode.value === valueToFind) return index;
      tmpNode = tmpNode.nextNode;
    }
    return -1;
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {
    if (this.headNode === undefined) return null;

    let string = '';
    let tmpNode = this.headNode;
    while (tmpNode != null) {
      string += '( ' + tmpNode.value + ' ) -> ';
      tmpNode = tmpNode.nextNode;
    }
    return string + ' null';
  }

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}
