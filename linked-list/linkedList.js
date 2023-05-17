// https://www.theodinproject.com/lessons/javascript-linked-lists

// LinkedList factory, which represents the full list.
function LinkedList(headNode = null) {
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

// Node factory, containing a value property and a link to the nextNode.
function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

// testing
const list = LinkedList();
list.prepend(5);
list.append(3);
list.prepend(2);
list.prepend(1);
list.append(54);
// head:1 -> node:2 -> node:5 -> node:3 -> tail:54 -> null

console.log(list.size()); // 5
console.log(list.head()); // node with value 1  + nextNode with all other Nodes
console.log(list.tail()); // node with value 52 + nextNode = null

console.log(list.at(0)); // value:  1
console.log(list.at(2)); // value:  5
console.log(list.at(4)); // value: 54
console.log(list.at(9)); // value: null

list.pop(); // works
list.pop(); // works
console.log(list.size()); // value: 3
console.log(list.head()); // head:1 -> node:2 -> tail:5 -> null
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list.head()); -> pop() works with all listSizes!

console.log(list.contains(5)); // true
const list2 = LinkedList();
console.log(list2.contains(1)); // false

console.log(list.head());
console.log(list.find(1)); // 0
console.log(list.find(2)); // 1
console.log(list.find(5)); // 2

console.log(list.toString()); // ( 1 ) -> ( 2 ) -> ( 5 ) ->  null
console.log(list2.toString()); // null
list2.append(5);
list2.append(3);
list2.append(2);
list2.append(2);
console.log(list2.toString()); // ( 5 ) -> ( 3 ) -> ( 2 ) -> ( 2 ) ->  null
