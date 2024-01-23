# Array Data Structure
```const a = []```
is not an array

Definition: continguous(unbreaking) memory space that contains a certain amount of bytes

Compiler responsibility in relation to an array: The compiler tells how to interpret the data structure, e.g "These 4 bytes will represent a number"

So when we make an array
```a = int[3]```
```a[0]``` <- This is saying that I want to access the memory address of a, then add the offest of 0 multiplied by how big the type is

Array is ungrowable, but a List is
Reason being is because if there is memory allocated for another variable after the designated space of the array, then there would be a conflict.

Then calling back to how accessing a specific value in an array is done by seeing the memory address, adding the offset and multiplying how big the type is, this is simply an O(1) constant time operatioadding the offset and multiplying how big the type is, this is simply an O(1) constant time operation.

# Array
- A fixed portion of contiguous memory chunks
- 'FIXED' means you can't grow it
- No 'insertAt' method/ push or pop
