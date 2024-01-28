import { test, expect } from "vitest";
import post_order_traverse from "./BTPostOrder";
import { BinaryTreeNode } from "./BTPreOrder";

const node7 = {value: 7} as BinaryTreeNode<number>;
const node6 = {value: 6} as BinaryTreeNode<number>;

const node5 = {value: 5} as BinaryTreeNode<number>;
const node4 = {value: 4} as BinaryTreeNode<number>;

const node3 = {value: 3, left: node6, right: node7} as BinaryTreeNode<number>;
const node2 = {value: 2, left: node4, right: node5} as BinaryTreeNode<number>;

const node1 = {value: 1, left: node2, right: node3} as BinaryTreeNode<number>;

test('post_order_traverse works', () => {
    expect(post_order_traverse(node1)).toEqual([4,5,2,6,7,3,1]);
})
