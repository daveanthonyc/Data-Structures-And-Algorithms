# Breadth First Search
- This algorithm visits all nodes on the same level and goes from the top level to the bottom most level
- It uses a Queue like data structure to be able to visit and traverse the nodes 
- However in JavaScript, since we use an arrayList as our queue, then shift/unshift is an O(n) operation which would be done throughout the O(n) traversal, making this a running time of O(n^2) 

# Questions
- BFS is more practical done iteratively, why?
