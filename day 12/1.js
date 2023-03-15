function majority(arr = []) {
 let result = { maxLength: 0, value: 0 };
 const set = new Set(arr);
 {
  1, 3, 4;
 }
 for (const value of set) {
  //loop 3x
  let tempLength = arr.filter((val) => val == value).length; // [1,1,1,1], [3], [4,4]
  if (result.maxLength < tempLength) {
   result.maxLength = tempLength;
   result.value = value;
  }
 }
 //result { maxlength : 4, value : 1},

 return result.maxLength > arr.length / 2 ? result.value : 'no majority';
}

//4 > 4

console.log(majority([1, 1, 1, 1, 3, 4, 4]));

// [1,1,1,1,1,2,2] = 7
// [1,1,1,1,1] = 5 > 7/2 => 1

// let x = [1, 1, 1, 1, 1, 5, 5, 5, 5, 7, 7, 7, 7, 7];
// const set2 = new Set(x);
// console.log(set2);

// for (let apapun of set2) {
//  console.log(apapun);
// }
