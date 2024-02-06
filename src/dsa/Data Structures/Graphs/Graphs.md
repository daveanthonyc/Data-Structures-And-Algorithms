# Graphs

It is a series of nodes with some amount of connections

# Graph Terms
- Requires 3 nodes, and if I can start at Node A, then go through a series of nodes and COME BACK to A, then that is a cyclic graph
- If unable, then **Uncyclic** graph

### Graph Connections
- Graph connections have specific directions to their connections. So there can be one way connections, or two way.
- Asymetric Graphs, there can be specific values to the directions between nodes
- Asymetric relationships

E.g
            100
Penrith     ->  Sydney
Penrith     <-  Sydney
            50

# Graph Terms Cont.
- Nodes in a graph can be referenced as: 
    - Vertex
    - Edge

Hence for running time, it isn't N for input, but O(E)

# 2 Ways to represent Graphs:
1. Adjacency List
2. Adjacency Matrix (Rarely see this one as it takes up a lot of memory O(V^2))

Have to describe WHERE it is going and WEIGHT of direction

# Adjacency List:
You can represent this as a list of tuple:
    [
        [{to: 4, weight: 5}],
        [{to: 0, weight: 9}],
        [{to: 2, weight: 1}],
    ]

# Adjacency Matrix: O(V)^2 to setup
- Each array represents a node
- Each index in the array represents the weight of the connection, and the position of the index in that array, represents the node
- Hence never used for maps
- Because each node is represented by a list, but that list is as long as how many nodes there are
- Hence requires so much memory
- amount of space = O(V)*2

# Searching an Adjacency Matrix

How an adjacency list is done:
There is an array of 'tuples' and the index of each tuple is associated with the node it represents.
The values in the tuple when then have to be the index of the node that it points to, and also the weight of connection to that node

E.g a cyclic graph 0 -> 1 -> 2 -> (look back to 0)
would be represented as:
[
    [{dir: 1, weight: 5}],
    [{dir: 2, weight: 5}],
    [{dir: 0, weight: 5}],
]

# Traversing an Adjacency List
Can visualise the recusive process using a pseudo stack
push() when visiting a node, if no chidlren, then pop() until no nodes left
- Seems important to keep track of visited nodes in a graph

# BFS on Graph 
- Seems important to be able to know how a queue is used and when exactly nodes are shifted and pushed 
- Pop off first element first, then push the connections
- To implement a BFS, it requires a seen, prev and queue array.

# Ideas on coding solutions to understand them quickly
- code out the solution line by line but write extensive comments on the reasoning behind each little thing

# BFS on Adjacency Matrix
- We need to preserve the shape of the graph with BFS, so that's why we don't use recursion. Then in a graph the best way to do this is through a "previous" array
- Since we can't use recursion as we need to preserve the shape of the graph

# Solving Algorithm quickly
- When doing Leetcode, I found that whiteboarding it slowly and iterating over the pseudo code helped quite a lot
- So when learning algorithms I think I should whiteboard over it slowly until I get the logic
- I should first understand how the basic iteration/recurse looks like. E.g the order of how nodes are visited

# Previous Array in BFS 
- the previous array index indicates the parent of the current node that we iterated from
- Hence for the source node, we haven't iterated from anything, but started at it, so it has no previous node and hence the value is "null" or -1

# Analysis of constructing algorithm
- Think of variables needed e.g:
    - Seen array -> when traversing the graph especially cyclic portions, I don't want the algorithm to enter a loop, but to visit all nodes and terminate
    - Prev array -> So when the algorithm finally comes across the target I'm searching for, then this previous array allows me to trace the path back from target to source and essentially get the path in reverse.
        - Question, why can't we use the seen array to construct the path? -> 
- When constructing loops always think of additional break cases that are outside of the main exit loop condition 

# Dijkstra's Shortest Path
It finds the shortest path to all other nodes from a source node
