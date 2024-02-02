export default function topKFrequent(nums: number[], k: number) {
    const map = new Map();
    const returnArr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } else {
            map.set(nums[i], 1);
        }

        if (map.get(nums[i]) === k) {
            returnArr.push(nums[i]);
        }
    }

    return returnArr;
}
