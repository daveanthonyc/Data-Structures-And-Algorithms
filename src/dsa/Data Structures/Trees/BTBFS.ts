type BinaryTreeNode<T> = {
    value: T,
    left: BinaryTreeNode<T>,
    right: BinaryTreeNode<T>,
}

// Apparently BFS isn't practical recursively
// Why?
export default function bfs(head: BinaryTreeNode<number>, target: number): boolean {

    // A JS arrayList is used as a queue to be able to use its .shift() method to deque and access the first element of the array of nodes visited
    // when at a leaf node, and it attempts to push curr.left / right which are undefined, then it would push null to the array
    const q: (BinaryTreeNode<number> | null)[] = [head];

    // as each node is visited, it is enqueued into the queue through the .push() method
    // however every node is shifted out of the array, so once all nodes are visited you would be left with an empty array with no nodes of length 0, a falsy value which exits the loop
    while (q.length) {

        // Acess the first node of the array and deque
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

    // all nodes visited not reaching any node that equals target
    return false;
}
