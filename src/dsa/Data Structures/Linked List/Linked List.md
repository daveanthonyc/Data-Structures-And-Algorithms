# Linked List
A node based data structure where each node has a value and has a pointer to another node

## Singly Linked List
- Has value
- Has next pointer

## Doubly Linked List
- Has value
- Has next pointer AND previous pointer

## Implementing a Doubly Linked List (Java API)
- An important concept and way of thinking is "if guarding"
- The algorithms in Linked List are very straight forward, but what makes it more lengthy is the different conditions where algorithms must act differently 
- A way of implementing these algorithms that is sort of similar to implementing recursive algorithms is to think about the general repeated function of your algorithm
- Then think about any cases where this algorithm doesn't work out, which usually is determined by edge cases of the length N of your list
- In addition, I also need to think if specific conditions of my algorithm are already solvable with another function that is already present 
- A lot of the Linked List operations focus on redirecting of the links between nodes and a separate traversing of the list

- One consideration to make is that the return values of the functions allow for the easy testing of these functions. They could just be void and mutate the Linked List, but it wouldn't allow for any helpful return values to test.
- So let's say I have a data structure with certain methods that simply mutate it, then I can consider returning a specific values that I would find useful in testing.

# Analysis of good coding practices
- ThePrimeagen was able to see what steps in code were repeatable and therefore be able to put in a private function.
- I can think of the general steps that are repeated and then subb them into separate functions. E.g traversing of nodes to find a node and deltion of nodes
- So I can build out my functions as normal, but I when I continue to create other functions, I need to be able to tell if I am rewriting any existing patterns. OR I could analyse the functions first to see if there is any indication of repeated patterns so that I can look out for them when I code.
- From here, I should just stop and think for a sec on how to implement the functions, esp the return types, input values

# Questions
- When implementing the methods, there was always the "if guarding" I was doing. But I found it tricky to keep track of which conditions have been met in order to know what values are accessible later in the code such that TypeScript doesn't think variables are possibly undefined.
- I realised that I didn't fully understand the API of insertAt().
