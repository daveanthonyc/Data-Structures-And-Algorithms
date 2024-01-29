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
