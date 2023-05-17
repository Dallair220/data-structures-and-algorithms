function LinkedList(headNode = null) {
  function append(value) {
    if (this.headNode === null) {
      this.headNode = Node(value);
      return;
    }
    // get to the end of the list and set its nextNode to the new node
    let tmpNode = this.headNode;
    while (tmpNode.nextNode !== null) {
      tmpNode = tmpNode.nextNode;
    }
    tmpNode.nextNode = Node(value);
  }

  function prepend(value) {
    if (this.headNode === null) {
      this.headNode = Node(value);
      return;
    }
    // new node is headNode and it's next node is the old headNode
    this.headNode = Node(value, this.headNode);
  }

  function size() {
    let listSize = 0;
    let tmpNode = this.headNode;
    while (tmpNode !== null) {
      listSize += 1;
      tmpNode = tmpNode.nextNode;
    }
    return listSize;
  }

  function head() {
    return this.headNode;
  }

  function tail() {
    let tmpNode = this.headNode;
    while (tmpNode.nextNode !== null) {
      tmpNode = tmpNode.nextNode;
    }
    return tmpNode;
  }

  function at(index) {
    let indexNode = this.headNode;

    for (let i = 0; i < index; i += 1) {
      if (indexNode === null) return null;
      indexNode = indexNode.nextNode;
    }

    return indexNode;
  }

  return { append, prepend, size, head, tail, at };
}

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
