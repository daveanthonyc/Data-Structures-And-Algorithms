export function containsDuplicate(arr: number[]): boolean {
    const set = new Set();

    for (const el of arr) {
        if (set.has(el)) {
            return true;
        }

        set.add(el);
    }

    return false;
}
