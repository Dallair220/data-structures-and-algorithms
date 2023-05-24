import mergeSort from '../../merge-sort/mergeSort.js';

export function Tree(array, root) {}

export function buildTree(array) {
  let uniqueArray = [...new Set(array)];
  let sortedArray = mergeSort(uniqueArray);
  return sortedArray;
}
