type ListNode<T> = {
    value: T,
    next?: ListNode<T>
}

export default class Queue<T> {
    private head?: ListNode<T>;
    private tail?: ListNode<T>;
    private length: number;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    peek(): T | string {
        return this.head ? this.head.value : "There is no value";
    }

    enqueue(val: T): void {
        const node = {value: val} as ListNode<T>;
        this.length++;

        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }

        this.tail.next = node;
    }

    deque(): void {
        if (!this.head) {
            return;
        }

        this.length--;

        if (!this.head.next) {
            this.head = undefined;
            this.tail = undefined;
            return;
        }

        const savedNext = this.head.next as ListNode<T>;
        this.head.next = undefined;
        this.head = savedNext;
    }
}
