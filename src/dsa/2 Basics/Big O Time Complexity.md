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

## Find worst case scenario

# Common complexities
- O(1) constant
- O(log n)
- O(n)
- O(n log n)
- O(n^2)
- O(2^n)
- O(n^3)

## Example of O(n^2):
```
function algorithm(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log("this is happening n^2")
        }
    }
}
```

## Example of O(n^3):
```
function algorithm(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                console.log("this is happening n^3")
            }
        }
    }
}
```

## Example of O(N Log n):
- Quick Sort

## Example of O(log n):
- Binary Search Trees

# IMPORTANT CONCEPTS:
1. Growth in respect to input
2. Constants are dropped
3. Worst case is the usual way we measure
