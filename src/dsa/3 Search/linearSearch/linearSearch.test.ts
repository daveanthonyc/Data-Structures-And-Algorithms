import { expect, test } from 'vitest'
import linearSearch from './linearSearch'

const arr = [1,5,3,6,7,3];

test('expect linear Search to work', () => {
    expect(linearSearch(arr, 5)).toBe(true);
})

test('expect linearSearch to handle corner cases', () => {
    expect(linearSearch(arr, 1)).toBe(true);
    expect(linearSearch(arr, 3)).toBe(true);
})
