export default class MinHeap {
    private data: number[];
    public length: number;

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number | undefined {
        if (this.length === 0) {
            return -1
        }
        
        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }


    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx >= this.length || lIdx >= this.length) {
            return;
        }

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const val = this.data[idx];

        if (lVal > rVal && val > rVal) {
            this.data[idx] = rVal;
            this.data[rIdx] = val;
            this.heapifyDown(rIdx);
        } else {
            this.data[idx] = lVal;
            this.data[rIdx] = val;
            this.heapifyDown(lIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const parentIdx = this.parent(idx);
        const parentVal = this.data[parentIdx];
        const currentVal = this.data[idx];

        if ( parentVal > currentVal) {
            // swap values
            this.data[parentIdx] = currentVal;
            this.data[idx] = parentVal;
            this.heapifyUp(parentIdx);
        }
    }


    private leftChild(idx: number): number {
        return 2 * idx + 1;
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2;
    }
}
