import { expect, test } from "vitest";

function testing(): number[] {
    const arr: number[] = [];
    mutate(arr);
    return arr;
}

function mutate(arg: number[]): void {
    arg.push(3);
}

test('An argument passed in a function that is passed into another function will be mutated if the second function mutates it and doesnt return it.', () => {
    expect(testing()[0]).toBe(3);
})
