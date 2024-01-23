# Introduction

These algorithms selected are the ones that are going to be the most useful in professional settings.

# Big O Notation
Big O Notation is a way to categorise algorithms by its space and time requirements when running it. It is not an exact measurement but it can generalise how your algorithm can grow in space/time requirements based on the input for the algorithm.

## Why use Big O Notation
It helps to make decisions on selecting specific algorithms based on space/time requirements

### EXAMPLE:
```
function algorithm(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```
This is O(n)

## Drop constants
