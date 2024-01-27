import { expect, test } from "vitest";
import DoublyLinkedList from "./DoublyLinkedList";


test('prepend works', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.prepend(5);
    expect(doublyList.getAt(0)).toBe(5);
    doublyList.prepend(6);
    expect(doublyList.getAt(0)).toBe(6);
})

test('append works', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.append(1);
    expect(doublyList.getAt(0)).toBe(1);
    doublyList.append(8);
    expect(doublyList.getAt(0)).toBe(1);
    expect(doublyList.getAt(1)).toBe(8);
})

test('Insert At Works with no values present', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.insertAt(0, 5);
    expect(doublyList.getAt(0)).toBe(5);
})

test('Insert At Works in the beggining, middle and end', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.prepend(4);
    doublyList.prepend(3);
    doublyList.prepend(2);
    doublyList.prepend(1);
    doublyList.insertAt(4, 5);
    expect(doublyList.getAt(4)).toBe(5);
    doublyList.insertAt(0, 0);
    expect(doublyList.getAt(0)).toBe(0);
    doublyList.insertAt(2, 10);
    expect(doublyList.getAt(2)).toBe(10);
})

test('Remove works in the beginning, middle and end', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.prepend(4);
    doublyList.prepend(3);
    doublyList.prepend(2);
    doublyList.prepend(1);
    expect(doublyList.remove(3)).toBe(3);
    expect(doublyList.remove(4)).toBe(4);
    expect(doublyList.remove(1)).toBe(1);
    expect(doublyList.getAt(0)).toBe(2);
})

test('removeAt works in the beginning, middle and end', () => {
    const doublyList = new DoublyLinkedList<number>();
    doublyList.prepend(4);
    doublyList.prepend(3);
    doublyList.prepend(2);
    doublyList.prepend(1);
    
    expect(doublyList.removeAt(0)).toBe(1);
    expect(doublyList.getAt(0)).toBe(2);
    expect(doublyList.removeAt(2)).toBe(4);
    expect(doublyList.getAt(1)).toBe(3);
})
