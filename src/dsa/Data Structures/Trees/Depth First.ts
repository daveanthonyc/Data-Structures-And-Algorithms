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
    // base case
    if (!node) {
        return false;
    }

    if (node.value === target) {
        return true;
    }

    let result = false;
    if (node.value <= target) {
        result = dfFind(node.left, target);
    } else {
        result = result || dfFind(node.right, target);
    }

    return result;
}


export function dfInsert(node: BinaryTreeNode<number>, val: number): void {

}

export function dfDelete(node: BinaryTreeNode<number>, val: number): void {

}
