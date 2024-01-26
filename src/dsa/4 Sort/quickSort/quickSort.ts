export default function quick_sort(arr: number[]): number[] {
    qs(arr, 0, arr.length-1);

    return arr;
}

function qs(arr: number[], lo: number, hi: number): void {
    // base case
    if (lo >= hi) {
        return;
    }

    // general recurse step = pick pivot, weak sort elements left and right of pivot returns pivot point
    const pivotPoint = partition(arr, lo, hi);
    
    // recurse portion left of pivot
    qs(arr, lo, pivotPoint-1);
    // recurse portion right of pivot
    qs(arr, pivotPoint+1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    // pick pivot at end of array
    const pivotVal = arr[hi];
    let index = -1;

    // iterate until end of array
    for (let i = lo; i < hi-1; i++) {
        if (arr[i] <= pivotVal) {
            // swap pivot
            index++;
            const tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    index++;
    // must swap the pivot which is in last place to the current pivot index
    arr[hi] = arr[index];
    arr[index] = pivotVal;

    return index;
}
