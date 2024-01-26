# Quick Sort
- achieved by "divide and conquer"
- First in the array an element is selected to "pivot"
- For instance, the last item is chosen, and the entire array is walked up until that pivot
    - every element being walked through is tested if it is smaller/equal and put on the "left" of the pivot and largest elements on the right


# Pitfalls
- If the pivot is chosen in last element and happens to be a reverse sorted array, then the running time would be O(n^2)

# Analysis of implementation of Algorithm
- Initial function that is incharge of instatiating the needed variables for the recurse to work
- There is the actual quick sort function -> and in that it just covers the broad functionality of the algorithm:
    E.g: 
        - base case
        - partition of array and weak sort
        - recurse quick sort left side / recurse quick sort right side
- There is the function that partitions array and weak sorts it

This leads to quite a few questions:
- How to figure out the functions necessary and their roles?
- How to figure out the necessary return types of said functions?
- How to use those return types in the args of recurse functions?

# My idea:
- I can first figure out the broad algorithm first to use the road map early on:
    - figure out function and params needed
    - so start with solid base case
    - have general idea of what is the functionality to be recursed, think of base case that stops that

# Questions
- how to analyse the running time to definitely get O(n log n)?
