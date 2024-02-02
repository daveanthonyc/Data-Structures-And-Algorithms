import { expect, test } from "vitest";
import topKFrequent from ".";

test('returns empty array if array is empty', () => {
    expect(topKFrequent([], 1)).toEqual([]);
})

test('returns correct answer', () => {
    expect(topKFrequent([1,2,3,4,1], 2)).toEqual([1]);
    expect(topKFrequent([1,2,3,4,1], 2)).toEqual([1]);
})
