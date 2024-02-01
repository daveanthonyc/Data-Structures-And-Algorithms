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

# Analysis of Heap Implementation
- There were several private functions needed on top of the public insert/delete methods
- These private functions ensured the single responsibillity principle where the main methods remain abstract and represent what the algorithm is.
- If a general step of the algorithm needs quite a bit of calculation or is a bit involved, then it can be abstracted out as a private function such that the main method clearly maintains a single responsibility that could be seen as general.

- It was implemented by first abstracting out specific functions that were simple to make

- Maybe I could think of the general implementation of the algorithm, and then start coding with the smaller functions
- Have an idea of how the algorithm works, then code.

# Difficulty
- It was a bit difficult implementing the logic of the heapify down as I wasn't sure about the conditions
- I'm also always confused by off by one cases in the case of what to do with inclusive/exclusive values
- e.g whether to put a < or a <= in algorithms
