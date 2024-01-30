type BinaryTreeNode<T> = {
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>
}

// finds a leaf to insert node at 
export default function depthFirstDelete(root: BinaryTreeNode<number>, target: number): void {
    const nodeToDeleteAt = find(root, target, root);
    deleteNode(nodeToDeleteAt);
}

function find(root: BinaryTreeNode<number> | undefined, target: number, prev: BinaryTreeNode<number>): BinaryTreeNode<number> {
    if (!root) {
        throw new Error("Node not found with requested value");
    }

    if (root.value === target) {
        return root;
    }

    prev = root;

    if (target <= root.value) {
        return find(root.left, target, prev);
    } else {
        return find(root.right, target, prev);
    }
}

function deleteNode(root: BinaryTreeNode<number>) {
    // once I found the node to delete

    // if no children, then can just delete it
    // if one child, then linked list delte operation
    // if 2 children, then more complex thing I don't understand
}

