# Graphs

It is a series of nodes with some amount of connections

# Graph Terms
- Requires 3 nodes, and if I can start at Node A, then go through a series of nodes and COME BACK to A, then that is a cyclic graph
- If unable, then **Uncyclic** graph

### Graph Connections
- Graph connections have specific directions to their connections. So there can be one way connections, or two way.
- Asymetric Graphs, there can be specific values to the directions between nodes

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
2. Adjacency Matrix (Rarely see this one as it takes up a lot of memory O(E^2))

Have to describe WHERE it is going and WEIGHT of direction

# Adjacency List:
You can represent this as a list of tuple: [edge3, 10] 

# Adjacency Matrix:
- Each array represents a node
- Each index in the array represents the weight of the connection, and the position of the index in that array, represents the node
