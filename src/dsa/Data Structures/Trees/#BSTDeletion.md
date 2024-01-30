# Binary Search Tree Deletion

Algorithm:
- have to find the node to delete
- Delete Cases:
    - if no children, then simply remove the node
    - if one child, then remove like a linked list
    - If 2 children, then have to choose either left or right side of node
        - if choosing left side, find node with largest value (traverse all the way to the right)
        - if node present on the left side, then linked list delete operation 
        - insert largest val as the parent
            - would be vice versa if choosing the right side
