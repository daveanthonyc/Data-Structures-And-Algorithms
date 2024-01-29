/*
* Interview Problem
* Given a root node of Binary Tree A, and another root node of Binary Tree B,
* compare the two trees if the nodes have the same values AND ALSO the SAME SHAPE
*/

type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

// I need to think about what kind of traversal can preserve the shape
// A depth first search preserves shapes, so when I come across problems where I have to be aware of the shape of a tree, then I can consider DFS
// Here I need to check if values are same AND structure is same
// then in base case, there should be separate checks if value/structure is same
export default function compare_BT(rootA: BinaryTreeNode<number> | undefined, rootB: BinaryTreeNode<number> | undefined): boolean {

    // structural check
    if (rootA === undefined || rootB === undefined) {
        return true;
    }

    // structural check
    if (rootA === undefined || rootB === undefined) {
        return false;
    }

    // value checks
    if (rootA.value !== rootB.value) {
        return false;
    }

    return compare_BT(rootA.left, rootB.left) && compare_BT(rootA.right, rootB.right);
}
