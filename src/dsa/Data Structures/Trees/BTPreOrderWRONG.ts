export type BinaryTreeNode<T> = {
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>,
}

export default function pre_order_traverse_wrong(head: BinaryTreeNode<number>): number[] {
    const path: number[] = [];
    return walk(head, path);
}

function walk(curr: BinaryTreeNode<number> | undefined, path: number[]): number[] {
    curr = curr as BinaryTreeNode<number>;
    path.push(curr.value);

    if (curr.left === undefined && curr.right === undefined) {
        return path;
    }

    if (curr.left) {
        walk(curr.left, path);
    }

    if (curr.right) {
        walk(curr.right, path);
    }

    return path;
}
