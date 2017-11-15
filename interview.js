import { BinarySearchTree } from "./binarytree";

'use strict';

// converting an existing sorted array into a new bst
// conversion to be O(n)

// resulting tree will be height balanced

// root node start @ middle of array
// recurse through left of middle of the array, same right of middle of the array

// input = array
// output = bst

// input
// [1,2,3,4,5,6,7,8,9,10]

// output
//               5
//       3              7
//   2       4       6      8

const converter = array => {
  const binarySearchTree = new BinarySearchTree(); // each node is bst, so OK to call recursively
  const midpoint   = Math.floor(array.length)/2;        // assume each time array is smaller, so 0 changes
  const leftArray  = array.slice(0,midpoint);
  const rightArray = array.slice()
  binarySearchTree.insert(array[index])
  converter(arraySubset);

  return binarySearchTree;
}