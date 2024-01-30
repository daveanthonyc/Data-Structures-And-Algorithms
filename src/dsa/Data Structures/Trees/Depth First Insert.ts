type BinaryTreeNode<T> = {
    value: T,
    left?: BinaryTreeNode<T>,
    right?: BinaryTreeNode<T>
}

// finds a leaf to insert node at 
export default function depthFirstInsert(root: BinaryTreeNode<number>, val: number): void {
    const prev = undefined;
    const nodeToInsertAt = find(root, prev, val);
    insert(nodeToInsertAt, val);
}

function find(root: BinaryTreeNode<number> | undefined, prev: BinaryTreeNode<number> | undefined, value: number): BinaryTreeNode<number> {

    if (!root) {
        return prev as BinaryTreeNode<number>;
    }

    prev = root;

    if (value <= root.value) {
        return find(root.left, prev, value);
    } else {
        return find(root.right, prev, value);
    }
}

function insert(root: BinaryTreeNode<number>, value: number) {
    const node = {value: value} as BinaryTreeNode<number>;

    if (value <= root.value) {
        root.left = node;
    } else {
        root.right = node;
    }
}

