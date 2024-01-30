# Breadth First Search
- This algorithm visits all nodes on the same level and goes from the top level to the bottom most level
- It uses a Queue like data structure to be able to visit and traverse the nodes 
- However in JavaScript, since we use an arrayList as our queue, then shift/unshift is an O(n) operation which would be done throughout the O(n) traversal, making this a running time of O(n^2) 

# Questions
- BFS is more practical done iteratively, why?

# Analysis
- It is a function that takes in the root node of the binary tree and a target to search for in the tree. 
- How the BREADTH first portion is achieved is by visiting the a node. Then pushing the values of left and right
- THEN we have to visit the node a level down and we do this by shifting the array, taking the first element of array out, essentiall allowing you to access the node at the next level

# Similartiry to Binary Search Algorithm
- Binary Search Algo, requires to find middle in order to check middle and then check left and right
- Exit condition was regarding divide and conquer style, where left and right pointers create array of length 1
- Binary Search Tree allows for the middle to already be found
- And easy API to access left and right portion
- Actually it is not too similar as I thought xD

- How does it work
