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

# Questions
- Given a recursive function, why write 2 functions for it?
