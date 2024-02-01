import { test, expect } from "vitest";
import isValid from ".";

test('isValid', () => {
    expect(isValid('[][]')).toBe(true);
    expect(isValid('[][]')).toBe(true);
})
