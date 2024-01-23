function binarySearch(arr: number[], target: number) {
    let start = 0;
    let end = arr.length-1;

    // out of bounds pre check
    if (target < arr[start]) {
        return false;
    }

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);


        if (arr[middle] === target) {
            return true;
        } else if (target < arr[middle]) {
            // check left
            end = middle;
        } else {
            // check right
            start = middle+1;
        }
    }

    return false;
}

export default binarySearch;
