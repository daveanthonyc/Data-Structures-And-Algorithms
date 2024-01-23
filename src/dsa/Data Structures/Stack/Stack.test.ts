
/* IMPORTS */
import { expect, test } from 'vitest'
import Stack from './Stack';

const myStack = new Stack();

test('Peek works', () => {
  expect(myStack.peek()).toBe(undefined);
})

test('Push works', () => {
  expect(myStack.push(4));
  expect(myStack.peek()).toBe(4);
  expect(myStack.push(9));
  expect(myStack.peek()).toBe(9);
})

test('Pop works', () => {
  expect(myStack.push(4));
  expect(myStack.push(9));
  expect(myStack.pop()).toBe(4);
})

