export default function recursiveSum(num: number): number {
    // base case
    if (num === 1) {
        return 1;
    }

    return num + recursiveSum(num - 1);
}
