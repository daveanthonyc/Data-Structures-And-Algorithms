# Trees

Examples:
- File System
- DOM

Basically from one node, there are children of that node. So visually it looks like a tree as node branches out into more nodes.

##### Root
- Top most node

##### Height
- Longest amount of nodes from root to leaf

#### Leaf
- nodes that have no children

## Binary Tree
- Most frequent
- tree with at max 2 children
- node structure would have left/right instead of just array of children with length 2

## General Tree
- Tree with 0 or more children

## Binary Search Tree 
- Binary tree with specific ordering of elements
- At most 2 children per node

## Balanced Tree
- All leaves are on the same level
- Left and right nodes are on the same level

## Branching Factor
-  The amount of children a tree has

# Traversals Types of trees
1. There is pre-order traversal
2. There is in-order traversal
3. There is post-order traversal

To visit all nodes, is a running time of O(n).

# Questions
- In recursion, it seems a bit tricky to follow and track how dependencies are mutated. How to keep track of them especially if they are returned?
- There is a bit of confusion with recursion in terms of knowing what the return values should be. I'm not sure how to use the return values to make the code convenient
- I'm having trouble keeping track the return address and return values and how it goes up and down a stack.
- I'm getting confused on what should be the return values
- I don't fully understand why recursion doesn't work in bfs as opposed to iterative approach -> 

# Learnings
- An argument passed in a function that is passed into another function will be mutated if the second function mutates it and doesnt return it. Knowing this helps keep track of recursion
- However this doesn't work for numbers in the same way it does for arrays. Initialise an array in function A, then pass as an argument into function B, which mutates the array inside func B: void, then the array in func A will be mutated. Wow
- There's something I don't understand about Js regarding this

# Chat GPT Answers
- OHHHHHHHH!!!! Of course, arrays are not like numbers because when we pass them as arguments, we are passing the REFERENECE!!!!
- Hence when you pass the reference, it is not a copy like a number, and so when it is mutated, it is mutating the same data stored in memory as opposed to numbers which I assume are made as copies when passed as args?
- Yes this is correct, numbers are passed as copies and therefore aren't mutated in void functions
- INTERESTING!

# Reference Types
- Arrays, Objects, Functions

# Primitive Types
- numbers, strings, booleans, null and undefined

# Analysis of whiteboarding preorder traversal
- Recursion: Algorithm doesn't really stop when the next value is undefined, but when the current is undefined
    - Why???
    - Maybe we can try algorithm where base case is where children are undefined
- I've tested this out and made a pre order traverse WRONG function where the base case is children are undefined.
- Result is that it requires a but more code and the solution is not as elegant, and it requires more type checking too
- It also requires even more if guarding

# DFS on a Binary Search Tree is much like traversing a linked list and searching

# Depth First Search on Binary Search Tree
- I had issues figuring out the algorithm as I would just copy how the other tree algorithms worked
- It was until I whiteboarded the problem where I saw traversing the BST was just traversing a linked list 
- So essentially I just made a function to traverse a linked list and then applied it to the BST 
- The only difference is just adding a condition whether to search left or right instead of simply recursing again with the next node like in a linked list.

# Running time of DFS, vs DFS on binary search tree
- n log(n) -> because we are visiting every node
- log (n) -> just like binary search algorithm
