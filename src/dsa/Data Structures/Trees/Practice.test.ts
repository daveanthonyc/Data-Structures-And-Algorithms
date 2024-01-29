import { test, expect } from "vitest";

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

// in base case unsure what to do when algorithm reaches leaf node, !node, unsure to return?
function dfFind(root: BinaryTreeNode<number> | undefined, target: number): boolean {
    // base case
    if (!root) {
        return false;
    }

    if (root.value === target) {
        return true;
    }

    if (target <= root.value) {
        dfFind(root.left, target)
    } else {
        dfFind(root.right, target)
    }
}

test('dfFind works', () => {
    expect(dfFind(node4, 1)).toBe(true);
})
