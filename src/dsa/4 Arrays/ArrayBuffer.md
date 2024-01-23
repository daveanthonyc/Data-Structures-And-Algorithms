# ArrayBuffer
- Like the arrayList, there is a buffer at the front, or an extra capacity than the head of the array.
- However it differs by having a secondary buffer at the tail/front of array

- It works by allowing values to be written into the head of the array, but when it exceeds the capacity, then the values to be written can be written in the tail end and essentiall loop around from the back to the front of the array

Main Benefit Case:
- Instead of creating new objects to store values, can just use the same array buffer so that memory use doesn't change

# Performance of arrayList in Javascript
- Push - O(1)
- Pop - O(1)
- Get - O(1)

- Shift O(n)
- Unshift O(n)
