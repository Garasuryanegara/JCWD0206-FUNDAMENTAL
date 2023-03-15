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

//[3,5,1,2,3,2,1,7]
//[1,1,2,2,3,3,5,7]
//filter return array dengan sebuah kondisi
// arr[index -1 ] cek belakang curr => tidak boleh sama dengan current
//arr[index +1 ] cek depan curr => tidak boleh sama dengan current
// loop 1 => curr = 1. prev = undefined , next = 1
// loop 2 => curr = 1. prev = 1, next 2
// loop 3 => curr = 2 . prev = 1, next 2
// loop 4 => curr = 2 . prev =2 , next 3
// loop 5 => curr = 3 . prev = 2 next 3
// loop 6 => curr 3 prev 3 next 5
// loop 7 => 5 prev 3 next 7 (true) => [5]
// loop 8 => 7 prev 5 next undefined (true) => [5,7]

console.log(findSingle([4, 1, 2, 1, 2]));
