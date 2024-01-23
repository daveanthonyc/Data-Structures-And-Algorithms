/* IMPORTS */
import { expect, test } from 'vitest'
import Queue from './Queue'

const myQueue = new Queue();

test('Peek Works', () => {
  expect(myQueue.peek()).toBe("There is no value");
})

test('enqueue works', () => {
    myQueue.enqueue(3);
  expect(myQueue.peek()).toBe(3);
})

test('deque works', () => {
    myQueue.enqueue(3);
    myQueue.enqueue(2);
  expect(myQueue.peek()).toBe(3);
    myQueue.deque();
  expect(myQueue.peek()).toBe(2);
})
