import removeDuplicatesAndSortArray from './cleanData.js';

export default function Tree(array, root) {
  const buildTree = ((arr) => {
    console.log(removeDuplicatesAndSortArray(arr));
  })(array);

  const prettyPrint = (node, prefix = '', isLeft = true) => {
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
