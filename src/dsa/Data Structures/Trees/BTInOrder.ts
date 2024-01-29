export type BinaryTreeNode<T> = {
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>,
}

export default function in_order_traverse(head: BinaryTreeNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}

function walk(curr: BinaryTreeNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);
    return path;
}
