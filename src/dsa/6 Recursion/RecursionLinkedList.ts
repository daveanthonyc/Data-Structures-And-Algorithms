export type ListNode<T> = {
    value: T,
    next?: ListNode<T>,
}

export default function recursive_list_walk(head: ListNode<number>): number[] {
    const path: number[] = []
    return walk(head, path);
}

function walk(curr: ListNode<number> | undefined, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    path.push(curr.value);
    return walk(curr.next, path);
}
