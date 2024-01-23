export default function binarySearch(arr: number[], target: number): boolean {
    let lo = 0;
    let hi = arr.length;

    do {
        const m = lo + Math.floor((hi - lo) / 2);
        const v = arr[m];

        if (v === target) {
            return true;
        } else if (target < v) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi)

    return false;
}
