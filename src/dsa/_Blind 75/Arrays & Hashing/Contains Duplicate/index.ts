/*
* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

export default function containsDuplicate(nums: number[]): boolean {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) { 
            return true;
        }

        set.add(nums[i]);
    }

    return false;
}
