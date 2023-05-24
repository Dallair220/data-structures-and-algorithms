import mergeSort from 'mergesort-dllr';

export function Tree(array, root) {}

export function buildTree(array) {
  let uniqueArray = [...new Set(array)]; // remove duplicates
  let sortedArray = mergeSort(uniqueArray);
  return sortedArray;
}
