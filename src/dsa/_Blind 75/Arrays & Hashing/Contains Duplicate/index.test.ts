import { expect, test } from "vitest";
import containsDuplicate from ".";

test('handles edge cases', () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([1])).toBe(false);
})


test('is able to find duplicate and return true', () => {
    expect(containsDuplicate([1,2,3,4,5,1])).toBe(true);
    expect(containsDuplicate([1,2,3,4,5,6,3,8,9,10])).toBe(true);
})

test('returns false for array of individual values', () => {
    expect(containsDuplicate([1,2,3,4,5,6])).toBe(false);
    expect(containsDuplicate([1,2,3,4,5,6,7,8])).toBe(false);
})
