import { expect, test } from 'vitest'
import bubbleSort from './bubbleSort'

const arr = [5,3,6,1,4];

test('bubble Sort works', () => {
    expect(bubbleSort(arr)).toEqual([1,3,4,5,6])
})
