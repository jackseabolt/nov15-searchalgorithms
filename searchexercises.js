'use strict';

const  { BinarySearchTree } = require('./binarytree'); 

// linear search

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      return arr[i];
    }
  }
  return null; 
}

// binary search 

function binarySearch(arr, value, start=0, end=arr.length) {
  console.log(`${start}, ${end}`);
  if(start > end ) return null; 
    
  let index = Math.floor((start + end) /2); 

  if(arr[index] === value) {
    return arr[index]; 
  }
  if(arr[index] > value) {
    return binarySearch(arr, value, start, index - 1); 
  }
  if(arr[index] < value) {
    return binarySearch(arr, value, index + 1, end);
  }
}

const myArr = [1,2,3,4,5,6,7,8];

// console.log(binarySearch(myArr, 7)); 


// depth first 

const myTree = new BinarySearchTree(); 
myTree.insert(5,5);
myTree.insert(5,5);
myTree.insert(4,4);
myTree.insert(2,2);
myTree.insert(8,8);
myTree.insert(9,9);
myTree.insert(10,10);
myTree.insert(7,7);

function depthFirstSearch(tree, value) {
  if (tree.key === value) {
    return tree.value;
  }
  let left; 
  let right; 
  if (!tree.left && !tree.right) {
    return null; 
  }
  if (tree.left) {
    left = depthFirstSearch(tree.left, value);
  }

  if (tree.right) {
    right = depthFirstSearch(tree.right, value);
  }
  if(left === value) {
    return left; 
  }
  else if (right === value) {
    return right;
  }
  else {
    return null; 
  }
}

// console.log(depthFirstSearch(myTree, 2)); 


// Exercise 3
// look for a book in a library with a Dewey Decimal index. Express as search algorithm.

    // assume ordered regardless
    // how is the data stored? array, b/c ordered regardless
    // stored as tree?
    // array: binary search, start @ middle, and keep dividing in half until found
    // tree: implement one of tree algos, DFS depth first search in order (left, middle, right)
        // start at root, if matching return, if less recurse left, if higher, recurse right.
        // when found return, if nothing left, return null
        // return value can be anything from that node or the entire node (e.g. the key, the value, a pointer to the entire node object)



// Exercise 4
// Then implement in-order, pre-order, and post-order functions on bst.
// starter data:
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22

// Check answers:
// pre-order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
// InOrder: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
// Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25

// Exercise 5
// share price over a week is: [128, 97, 121, 123, 98, 97, 105]. If you had to buy shares in the company on one day, and sell the shares on one of the following days, write an algorithm to work out what the maximum profit.

  // What's the input variable? Inputs are buy date and sell date? And the output is profit for that day?
  // Or is the input just the array, and the algorithm determines the most profitable buy & sell dates and the profit from that date combination?

  // for the former, array[input] - array[sell] = profit
  // for the latter, 
  // most profitable highest - lowest
  // higher index must be greater than the lower index (i.e. later sell date than buy date)
  // if that ^ test fails, go to the next highest number
  // edge case lowest number is last date
  // start @ first date: get highest number after that; that is your #1 choice
  // recurse through the array, and see if you can do better, better moves up to #1 choice
  // @ end, return #1 choice
  // 128 all sells are losses, return lowest loss, -5
  // 97: #1 = -5; 123 - 97 = 26; 26 > -5; #1 = 26;


// Exercise 6 - This is fun exercise to do - make this an optional one after you are done with all the exercises above
// Imagine that you wanted to find what the highest floor of a 100 story building you could drop an egg was, without the egg breaking. But you only have two eggs. Write an algorithm to work out which floors you should drop the eggs from to find this out in the most efficient way

.