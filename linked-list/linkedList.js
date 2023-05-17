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

  return { append, prepend, size, head, tail };
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

console.log(list.size());
console.log(list.head());
console.log(list.tail());
