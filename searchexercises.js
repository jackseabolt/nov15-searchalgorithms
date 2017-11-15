const  { BinarySearchTree } = require('./binarytree'); 

// linear search

function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return arr[i]
        }
    }
    return null; 
}

// binary search 

function binarySearch(arr, value, start=0, end=arr.length) {
    console.log(`${start}, ${end}`)
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

const myArr = [1,2,3,4,5,6,7,8]

// console.log(binarySearch(myArr, 7)); 


// depth first 

const myTree = new BinarySearchTree(); 
myTree.insert(5,5)
myTree.insert(5,5)
myTree.insert(4,4)
myTree.insert(2,2)
myTree.insert(8,8)
myTree.insert(9,9)
myTree.insert(10,10)
myTree.insert(7,7)

function depthFirstSearch(tree, value) {
    if (tree.key === value) {
        return tree.value
    }
    let left; 
    let right; 
    if (!tree.left && !tree.right) {
        return null; 
    }
    if (tree.left) {
        left = depthFirstSearch(tree.left, value)
    }

    if (tree.right) {
        right = depthFirstSearch(tree.right, value)
    }
    if(left === value) {
        return left; 
    }
    else if (right === value) {
        return right
    }
    else {
        return null; 
    }
}

// console.log(depthFirstSearch(myTree, 2)); 


