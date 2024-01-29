import { test, expect } from "vitest";
import compare_BT from "./Search Problem";
import { BinaryTreeNode } from "./BTPreOrder";

const node7 = {value: 7} as BinaryTreeNode<number>;
const node6 = {value: 6} as BinaryTreeNode<number>;

const node5 = {value: 5} as BinaryTreeNode<number>;
const node4 = {value: 4} as BinaryTreeNode<number>;

const node3 = {value: 3, left: node6, right: node7} as BinaryTreeNode<number>;
const node2 = {value: 2, left: node4, right: node5} as BinaryTreeNode<number>;

const node1 = {value: 1, left: node2, right: node3} as BinaryTreeNode<number>;

const node16 = {value: 9} as BinaryTreeNode<number>;
const node15 = {value: 6} as BinaryTreeNode<number>;

const node14 = {value: 5} as BinaryTreeNode<number>;
const node13 = {value: 4} as BinaryTreeNode<number>;

const node12 = {value: 3, left: node15, right: node16} as BinaryTreeNode<number>;
const node11 = {value: 2, left: node13, right: node14} as BinaryTreeNode<number>;

const node10 = {value: 1, left: node11, right: node12} as BinaryTreeNode<number>;

test('2 trees are the same', () => {
    expect(compare_BT(node1, node10)).toEqual(false);
    expect(compare_BT(node1, node1)).toEqual(true);
})
