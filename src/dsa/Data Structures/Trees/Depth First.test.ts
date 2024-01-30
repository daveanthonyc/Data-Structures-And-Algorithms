import { expect, test } from "vitest";
import { dfFind } from "./Depth First";
import depthFirstInsert from "./Depth First Insert";
import pre_order_traverse from "./BTPreOrder";

type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

const node7 = {value: 20} as BinaryTreeNode<number>;
const node6 = {value: 13} as BinaryTreeNode<number>;

const node5 = {value: 7} as BinaryTreeNode<number>;
const node4 = {value: 1} as BinaryTreeNode<number>;

const node3 = {value: 15, left: node6, right: node7} as BinaryTreeNode<number>;
const node2 = {value: 5, left: node4, right: node5} as BinaryTreeNode<number>;

const node1 = {value: 10, left: node2, right: node3} as BinaryTreeNode<number>;

test('Depth First Find Works', () => {
     expect(dfFind(node1, 1)).toBe(true);
     expect(dfFind(node1, 10)).toBe(true);
     expect(dfFind(node1, 7)).toBe(true);
     expect(dfFind(node1, 20)).toBe(true);
     expect(dfFind(node1, 24)).toBe(false);
})

// get find method
test('Depth First Insert Works', () => {
    expect(pre_order_traverse(node1)).toEqual([10,5,1,7,15,13,20]);
    depthFirstInsert(node1, 2);
    expect(pre_order_traverse(node1)).toEqual([10,5,1,2,7,15,13,20]);
})

