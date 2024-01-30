type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

/*
* Given the root of Binary Search Tree, find target 
*/

// I need to understand the significance of the return value
// false means there is no node found
export function dfFind(node: BinaryTreeNode<number> | undefined, target: number): boolean {
    if (!node) {
        return false;
    }

    if (node.value === target) {
        return true;
    }

    if (target <= node.value) {
        return dfFind(node.left, target);
    } else {
        return dfFind(node.right, target);
    }
}

export function dfInsert(node: BinaryTreeNode<number>, val: number): void {

}

export function dfDelete(node: BinaryTreeNode<number>, val: number): void {

}
