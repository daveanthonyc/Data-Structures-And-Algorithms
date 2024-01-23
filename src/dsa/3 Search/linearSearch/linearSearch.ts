export default function linearSearch(arr: number[], target: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }

    return false;
}
