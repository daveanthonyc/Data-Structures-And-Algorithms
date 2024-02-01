export default class MinHeap {
    private length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    debug_getData(): number[] {
        return this.data;
    }

    insert(val: number): void {
        this.data[this.length] = val;
        this.length++;
        this.heapifyUp(this.length-1);
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return undefined;
        }

        this.length--;
        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.data.pop();
        this.heapifyDown(0);
        return out;
    }

    heapifyDown(index: number): void {
        const leftIndex = this.leftChildIndex(index);
        const rightIndex = this.rightChildIndex(index);

        if (index > this.length || leftIndex > this.length) {
            return;
        }

        // compare values
        const currentVal = this.data[index];
        const leftVal = this.data[leftIndex];
        const rightVal = this.data[rightIndex];

        if (currentVal > leftVal && leftVal < currentVal) {
            // swap current and right val
            this.data[index] = leftVal;
            this.data[leftIndex] = currentVal;
            this.heapifyDown(leftIndex);
        } else if (currentVal > rightVal && rightVal < currentVal) {
            this.data[index] = rightVal;
            this.data[rightIndex] = currentVal;
            this.heapifyDown(rightIndex);
        }
    }

    heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const currentVal = this.data[index];
        const parentIndex = this.parentIndex(index);
        const parentVal = this.data[parentIndex];

        if (currentVal < parentVal) {
            // swap
            this.data[index] = parentVal;
            this.data[parentIndex] = currentVal;
        }
    }

    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    private rightChildIndex(index: number): number {
        return 2 * index + 2;
    }
}
