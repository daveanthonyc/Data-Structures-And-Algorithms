# Recursion
Simple Def: It is just a function that calls itself
until it reaches a "base case", a condition where the function should stop

Async recursion? => e.g walking a file tree with async function (not quite recursion)

Example: using recursion sum numbers from 1-100

```
function recursiveSum(num: number) {
    if (num === 1) {
        return 1;
    }

    return n + recursiveSum(n-1);
}
```

#### Return Address
when a function is called, there is an address to where the value of the function should be returned
#### Return Value
There should be a value returned
#### Arguments

Linking these together, we can only know the return value of the recursion until it has reached the base case

# 2 Steps to Recursion
1. Base Case
2. Recurse
    -> Broken into 3 steps:
        1. pre-recurse -> do something before recurse
        2. recurse
        3. post-recurse

# Base Case Analysis
- It seems like the base case are the condition/s that would stop a recurse from being indefinite
- So I can think about how the recurse generally works and then see what conditions would stop it
- There is some level of thought needed in how to implement the base case. For example, what dependencies would it need and what type would they be? Would you have to modify an existing type? Or just create a new type?

# Creating functions
- I can think about what you would name the act of recursing and make that as a separate function to recurse in
- Then the first function given would be something:
    1. to declare variables in 
    2. run the actual recurse function
    3. return the expected result of problem/function

# How to determine if there are steps in pre, recurse and post?
- In the case of the maze solver, I push a point to the seen array, then recurse, steps happening after the recurse means that no.......

# Questions
- Given a recursive function, why write 2 functions for it?

# Summary
- Figure out base case first, which is what conditions stop your general recurse?
- Create function for recursion, and implement base case with dependency types in mind
- Think about pre, recurse, and post

# Reflection
- There was a lot of difficulty debugging recursion
- I realised that not testing base cases made it so much harder
- In addition, I found it hard to grasp what the return values really meant in the algorithm and just started putting random return true false;
- Dig deeper: 
    Understand more what the exit condition does
    Understand the recurse return value and how it affects the algorithm
