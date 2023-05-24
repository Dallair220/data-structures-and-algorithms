import mergeSort from 'mergesort-dllr';

export default function removeDuplicatesAndSortArray(array) {
  let uniqueArray = [...new Set(array)]; // remove duplicates
  let sortedArray = mergeSort(uniqueArray);
  return sortedArray;
}
