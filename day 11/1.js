// Create a function to convert Excel sheet column title to its corresponding column number.

function convertColumnExcel(column = '') {
 let arrAlpha = ' abcdefghijklmnopqrstuvwxyz';
 //a = 1
 //ab = 27 => 26*1 + 1
 //bb = 26 *2 + 2
 //zz = 702 => 26*26 +26
 //aaa => 703 => 1(26*26) + (1*26) + 1
 //baa => 2(26*26) + (1*26) + 1

 let numbers = column
  .toLowerCase()
  .split('')
  .map((letter) => arrAlpha.indexOf(letter));
 console.log(numbers);

 if (numbers.length === 1) {
  return numbers[0];
 } else if (numbers.length === 2) {
  return 26 * numbers[0] + numbers[1];
 } else if (numbers.length === 3) {
  return numbers[0] * (26 * 26) + numbers[1] * 26 + numbers[2];
 } else {
  return 'tidak bisa lebih dari 3 digit column';
 }
}

console.log(convertColumnExcel('ab'));

// console.log(parseInt('z', 36) - 9);

let column = 'AB';
let arrAlpha = ' abcdefghijklmnopqrstuvwxyz';

console.log(
 column.split('').reduce((prev, curr) => {
  return prev * 26 + parseInt(curr, 36) - 9; //cara menggunakan parseint dengan radix
  //   return prev * 26 + arrAlpha.indexOf(curr.toLocaleLowerCase()); // cara menggunakan indexof lebih sederhana
 }, 0)
);
