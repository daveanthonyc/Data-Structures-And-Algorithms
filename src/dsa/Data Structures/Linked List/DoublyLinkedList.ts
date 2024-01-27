type ListNode<T> = {
    value: T,
    next?: ListNode<T>,
    prev?: ListNode<T>,
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(val: T): void {
        this.length++;
        const node = {value: val} as ListNode<T>;

        if (!this.head) {
            this.head = this.tail = node; 
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(index: number, val: T, ): void {
        if (index > this.length) {
            throw new Error("index exceeds list length");
        }

        if (!this.head || index === 0) {
            this.prepend(val);
            return;  
        } else if (this.length === index) {
            this.append(val);
            return;
        } else {
            const node = {value: val} as ListNode<T>;
            this.length++;

            // traverse nodes
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next as ListNode<T>;
            }

            const currPrev = curr.prev as ListNode<T>;
            // possible issue that curr prev doesn't exist?
            currPrev.next = node;
            node.prev = curr.prev;
            node.next = curr;
            curr.prev = node;
        }
    }

    append(val: T): void {
        this.length++;
        if (!this.tail) {
            this.prepend(val);
            return;
        }

        const node = {value: val} as ListNode<T>;
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }


    remove(val: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === val) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        this.length--;
        if (this.length === 0) {
            return undefined;
        }

        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        
        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        curr.next = curr.prev = undefined;
        return val;
    }

    getAt(index: number): T | undefined {
        if (index > this.length || index < 0 || !this.head) {
            return undefined;
        }

        // traverse
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next as ListNode<T>;
        }

        return curr.value;
    }

    removeAt(index: number): T | undefined {
        if (index > this.length || index < 0 || !this.head) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next as ListNode<T>;
        }

        if (curr === this.head) {
            this.head = curr.next;
        }

        if (curr === this.tail) {
            this.tail = curr.prev;
        }

        //remove node
        if (curr.prev) {
            curr.prev.next = curr.next;
        }

        if (curr.next) {
            curr.next.prev = curr.prev;
        }

        this.length--;

        const returnVal = curr.value;
        curr.next = curr.prev = undefined;
        return returnVal;
    }

    output(): void {
        console.log('Length: ' + this.length);
        if (this.head) {
            console.log('Head: ' + this.head.value);
        } else {
            console.log('Head: no head')
        }

        if (this.tail) {
            console.log('Tail: ' + this.tail.value);
        } else {
            console.log('Tail: no tail')
        }

        if (!this.head) {
            console.log('There is no head');
            return;
        }

        let output = "";

        let curr: ListNode<T> | undefined = this.head;
        while (curr) {
            output += `${curr.value} -> `;
            curr = curr.next;
        }

        console.log(output)
    }
}
