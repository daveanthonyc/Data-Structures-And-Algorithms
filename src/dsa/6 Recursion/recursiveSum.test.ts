import { expect, test } from "vitest";
import recursiveSum from "./recursiveSum";

test('recursive sum works', () => {
    expect(recursiveSum(5)).toBe(15);
    expect(recursiveSum(10)).toBe(55);
})
