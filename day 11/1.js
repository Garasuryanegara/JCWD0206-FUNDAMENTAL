// Create a function to convert Excel sheet column title to its corresponding column number.

function convertColumnExcel(column = '') {
 let arrAlpha = ' abcdefghijklmnopqrstuvwxyz';
 //a = 1
 //ab = 27 => 26*1 + 2
 //bc = 26 * index ke 0 + index ke 1
 //zz = 702 => 26*26 +26
 //aaa => 703 => 1(26*26) + (1*26) + 1
 //bcd => 2(26*26) + (3*26) + 4

 //zzz => [26,26,26]
 //abc => [1,2,3]

 let numbers = column
  .toLowerCase()
  .split('') //jadi array
  .map((letter) => arrAlpha.indexOf(letter)); //looping
 console.log(numbers);

 if (numbers.length === 1) {
  return numbers[0];
 } else if (numbers.length === 2) {
  return 26 * numbers[0] + numbers[1]; // 26 * 1 + 2 = 28
 } else if (numbers.length === 3) {
  //[26,26,26]
  //26 * (26*26) + 26 *26 + 26

  //ACD [1,3,4]
  //1 * (26*26) + 3 *26 + 4
  return numbers[0] * (26 * 26) + numbers[1] * 26 + numbers[2];
 } else {
  return 'tidak bisa lebih dari 3 digit column';
 }
}

console.log(convertColumnExcel('CD'));

// console.log(parseInt('3000', 36));
console.log(parseInt('a', 36) - 9);

let column = 'AB';
let arrAlpha = ' abcdefghijklmnopqrstuvwxyz';

column.split('');
//['A','B']
//reduce start dari index 1 => alasannya karena tidak memiliki initial value? prev
// reduce(cb,initial value)
//reduce((prev,curr)=>{ prev * 26 + parseInt(A, 36) - 9 },0)
//A,B,C
// 0 * 26 + 1 = 1
// 1* 26 + 2 = 28
// 28*26 + 3 =

console.log(
 column.split('').reduce((prev, curr) => {
  //   return prev * 26 + parseInt(curr, 36) - 9; //cara menggunakan parseint dengan radix
  return prev * 26 + arrAlpha.indexOf(curr.toLocaleLowerCase()); // cara menggunakan indexof lebih sederhana
 }, 0)
);
