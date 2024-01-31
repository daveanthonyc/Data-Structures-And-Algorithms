# Heap (Priority Queue)

- Binary tree where every child and grandchild is smaller or larger
- Whenever node is added, adjust tree
- Whenever node is deleted, adjust tree
- there is no traversing of tree
- weak ordering where the right side left side isn't in order
- Just each level is larger than next

Min heap, Min  = root
Max heap, Max = root

Min Heap => Root node is smallest

You can just store these nodes/node values in an array, since there is no need to order the left and right, just as long as they are larger than node above

Operations:
INSERT: inserting a value, place an extra node to fill out the level from left to right, breadth first ordering
- Then bubble up from curr to root, swapping the value, as long as it keeps the heap ordering in the levels (min heap: each level is larger the deeper it goes)

DELETE: let's say we delete the min value, top most value of min heap
- then put largest value in place of the deleted node, then bubble down
- check the minimum of the 2 children and then compare and swap if the child is smaller than the max node

Then in a heap implemented in an arrayList, how then can we access children?
- given index of node
- formulae:
    LEFT: 2(i) + 1
    RIGHT: 2(i) + 2

Then how about getting the parent?
- Math.floor((i-1)/2)

Heap do not have empty spaces, meaning no left node would have an empty space whilst a right node is full. So it fills in from the left to the right

GOOD:
- WHen inserting, it always balances
