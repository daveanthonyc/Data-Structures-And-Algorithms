import { expect, test } from 'vitest'
import binarySearch from './binarySearch'

const oddArray = [1,2,3,4,5,6,7];
const evenArray = [1,2,3,4,5,6];

// doesn't work for number 7

test('corner cases work in odd length array', () => {
    expect(binarySearch(oddArray, 4)).toBe(true);
    expect(binarySearch(oddArray, 1)).toBe(true);
    expect(binarySearch(oddArray, 7)).toBe(true);
})

test('corner cases work in even length array', () => {
    expect(binarySearch(evenArray, 3)).toBe(true);
    expect(binarySearch(evenArray, 1)).toBe(true);
    expect(binarySearch(evenArray, 6)).toBe(true);
})

test('binary search handles numbers outside of array', () => {
    expect(binarySearch(oddArray, -2)).toBe(false);
    expect(binarySearch(oddArray, 0)).toBe(false);
    expect(binarySearch(oddArray, 8)).toBe(false);
})
