import { expect, describe, test } from "vitest";
import { containsDuplicate } from "./containsDuplicate";

describe('contains duplicate', () => {
    test('works', () => {
        expect(containsDuplicate([1,2,3])).toEqual(false);
    })
})
