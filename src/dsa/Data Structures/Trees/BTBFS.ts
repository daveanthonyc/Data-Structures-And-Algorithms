type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

// Apparently BFS isn't practical recursively
// Why?
export default function bfs(head: BinaryTreeNode<number>, target: number): boolean {

    const q: (BinaryTreeNode<number> | null)[] = [head];

    while (q.length) {

        const curr = q.shift() as BinaryTreeNode<number> | undefined | null;
        if (!curr) {
            continue;
        }

        if (curr.value === target) {
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}
