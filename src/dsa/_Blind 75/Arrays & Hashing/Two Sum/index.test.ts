import { expect, test } from "vitest";
import isValidAnagram from ".";

test('returns empty array for array of one value', () => {
    expect(isValidAnagram([1], 5)).toBe(false);
})

test('works', () => {
    expect(isValidAnagram([1,4,10,15,2,16], 6)).toEqual([1,4]);
})


