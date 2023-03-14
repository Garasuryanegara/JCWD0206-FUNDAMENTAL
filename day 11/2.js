// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

function findSingle(arr = []) {
 arr.sort();
 return arr.filter((val, idx) => arr[idx - 1] != val && arr[idx + 1] != val);
}

console.log(findSingle([4, 1, 2, 1, 2]));
