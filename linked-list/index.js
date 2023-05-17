// https://www.theodinproject.com/lessons/javascript-linked-lists

import LinkedList from './linkedList.js';

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
