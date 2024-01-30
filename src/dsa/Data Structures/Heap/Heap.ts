export default class MinHeap {
    private data: number[];
    public length: number;

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(): void {

    }

    delete(): number {
        
    }

    private parent(idx: number) {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number) {
        return 2 * idx - 1;
    }

    private rightChild(idx: number) {
        return 2 * idx - 2;
    }
}
