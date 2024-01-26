import { expect, test } from "vitest";
import quick_sort from "./quickSort";

const arr = [10,1,9,2,8,3,7,5];
const correct = arr.sort((a,b) => a-b);

test('quick sort works', () => {
    expect(quick_sort(arr)).toEqual(correct);
})
