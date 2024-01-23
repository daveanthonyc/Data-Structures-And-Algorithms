type StackNode<T> = {
    value: T,
    next: StackNode<T>
}

export default class Stack<T> {
    private head?: StackNode<T>;
    private length: number;

    constructor() {
        this.head  = undefined;
        this.length = 0;
    }

    push(val: T): void {
        this.length++;
        
        const node = {value: val} as StackNode<T>; 

        if (this.head) {
            node.next = this.head
            this.head = node;
            return;
        }

        this.head = node;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        if (!this.head.next) {
            this.head = undefined;
            return undefined;
        }

        this.head = this.head.next;
        return this.head.value;
    }
}
