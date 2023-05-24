import mergeSort from 'mergesort-dllr';

export function Tree(array, root) {}

export function buildTree(array) {
  let uniqueArray = [...new Set(array)];
  let sortedArray = mergeSort(uniqueArray);
  return sortedArray;
}
