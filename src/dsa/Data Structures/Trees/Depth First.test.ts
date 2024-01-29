import { expect, test } from "vitest";
import { dfFind } from "./Depth First";

type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

const node7 = {value: 7} as BinaryTreeNode<number>;
const node6 = {value: 5} as BinaryTreeNode<number>;

const node5 = {value: 3} as BinaryTreeNode<number>;
const node4 = {value: 1} as BinaryTreeNode<number>;

const node3 = {value: 6, left: node6, right: node7} as BinaryTreeNode<number>;
const node2 = {value: 2, left: node4, right: node5} as BinaryTreeNode<number>;

const node1 = {value: 4, left: node2, right: node3} as BinaryTreeNode<number>;

test('Depth First Find Works', () => {
//     expect(dfFind(node1, 7)).toBe(true);
//     expect(dfFind(node1, 5)).toBe(true);
//     expect(dfFind(node1, 8)).toBe(false);
//     expect(dfFind(node1, 1)).toBe(true);
})
