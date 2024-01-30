import { test, expect } from "vitest";
/*
* This is a testing suite to experiement on any ideas I had regarding Trees 
* It is just like a scrap book where I would rapidly test ideas and delete and put new ones in
*/

type BinaryTreeNode<T> = {
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>,
}

const node7 = {value: 7} as BinaryTreeNode<number>;
const node5 = {value: 5} as BinaryTreeNode<number>;

const node3 = {value: 3} as BinaryTreeNode<number>;
const node1 = {value: 1} as BinaryTreeNode<number>;

const node6 = {value: 6, left: node5, right: node7} as BinaryTreeNode<number>;
const node2 = {value: 2, left: node1, right: node3} as BinaryTreeNode<number>;

const node4 = {value: 4, left: node2, right: node6} as BinaryTreeNode<number>;

function bfs(root: BinaryTreeNode<number> | undefined, target: number): boolean {
    const path = [root];

    while (path.length) {

        const newCurr = path.shift();

        if (!newCurr) {
            continue;
        }

        if (newCurr.value === target) {
            return true;
        }

        path.push(newCurr?.left);
        path.push(newCurr?.right);
    }

    return false;
}

test('dfFind works', () => {
    expect(bfs(node4, 1)).toBe(true);
})

type ListNode<T> = {
    value: T,
    next?: ListNode<T>
}

const listNode5 = {value: 5} as ListNode<number>;
const listNode4 = {value: 4, next: listNode5} as ListNode<number>;
const listNode3 = {value: 3, next: listNode4} as ListNode<number>;
const listNode2 = {value: 2, next: listNode3} as ListNode<number>;
const listNode1 = {value: 1, next: listNode2} as ListNode<number>;

function recursiveSearchLinkedList(root: ListNode<number> | undefined, target: number): boolean {
    if (!root) {
        return false;
    }

    if (root.value === target) {
        return true;
    }

    return recursiveSearchLinkedList(root.next, target);
}

test('Linked list search implementation', () => {
    expect(recursiveSearchLinkedList(listNode1, 1)).toBe(true);
    expect(recursiveSearchLinkedList(listNode1, 3)).toBe(true);
    expect(recursiveSearchLinkedList(listNode1, 5)).toBe(true);
    expect(recursiveSearchLinkedList(listNode1, 6)).toBe(false);
})

