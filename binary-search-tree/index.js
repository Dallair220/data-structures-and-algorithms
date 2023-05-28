import Tree from './tree.js';

let array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let t1 = Tree(array);
t1.prettyPrint();

t1.deleteValue(8);

t1.prettyPrint();
