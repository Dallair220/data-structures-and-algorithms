import Node from './node.js';
import removeDuplicatesAndSortArray from './cleanData.js';

export default function Tree(array) {
  const sortedArray = removeDuplicatesAndSortArray(array);

  const buildTree = (arr, start, end) => {
    // Base Case
    if (start > end) return null;
    // Get the middle element and make it root
    var mid = parseInt((start + end) / 2);
    var node = Node(arr[mid]);
    // Recursively construct the left subtree and make it left child of root
    node.left = buildTree(arr, start, mid - 1);
    // Recursively construct the right subtree and make it right child of root
    node.right = buildTree(arr, mid + 1, end);
    return node;
  };
  let root = buildTree(sortedArray, 0, sortedArray.length - 1);

  const prettyPrint = (node = root, prefix = '', isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  return { root, prettyPrint };
}
