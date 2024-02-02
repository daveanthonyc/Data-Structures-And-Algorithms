import { expect, test } from "vitest";
import twoSum from ".";

test('returns empty array for array of one value', () => {
    expect(twoSum([1], 5)).toEqual([]);
    expect(twoSum([], 5)).toEqual([]);
})

test('works', () => {
    expect(twoSum([1,4,10,15,2,16], 6)).toEqual([1,4]);
})


