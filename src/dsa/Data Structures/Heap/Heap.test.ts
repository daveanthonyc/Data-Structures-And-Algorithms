import { expect, test } from "vitest";
import MinHeap from "./Heap";


test('MinHeap initialises as empty array and inserts 1 value', () => {
    const myHeap = new MinHeap();
    expect(myHeap.debug_getData()).toEqual([]);
    myHeap.insert(3);
    expect(myHeap.debug_getData()).toEqual([3]);
    myHeap.insert(2);
    expect(myHeap.debug_getData()).toEqual([2,3]);
    myHeap.insert(5);
    myHeap.insert(4);
    myHeap.insert(29);
    expect(myHeap.debug_getData()).toEqual([2,3,5,4,29]);
})

test('MinHeap is able to delete', () => {
    const myHeap = new MinHeap();
    myHeap.insert(3);
    myHeap.insert(2);
    myHeap.insert(5);
    myHeap.insert(4);
    myHeap.insert(29);
    myHeap.delete();
    expect(myHeap.debug_getData()).toEqual([3,4,5,29]);
})
