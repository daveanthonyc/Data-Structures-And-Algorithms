/* IMPORTS */
import { expect, test } from 'vitest'
import Queue from './Queue'

const myQueue = new Queue();

test('Empty Queue peek returns a string', () => {
  expect(myQueue.peek()).toBe("There is no value");
})

test('Queue deque works', () => {
    myQueue.enqueue(4)
    expect(myQueue.peek()).toBe(4)
    myQueue.enqueue(9)
    myQueue.enqueue(2)
    myQueue.deque();
    expect(myQueue.peek()).toBe(9)
})
