// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

let number = 9;

for (let index = 1; index <= 10; index++) {
 console.log(`${number} x ${index} = ${number * index}`);
}

// Write a code to check whether a string is a palindrome or not.
let str = 'kodok';
// kodokkodok
// console.log(str.split(' ').join(''));
// let Reverse = str.replace(/ /g, '').toLowerCase().split('').reverse().join('');
let Reverse = '';

for (let i = str.length; i >= 0; i--) {
 Reverse += str.charAt(i);
}
console.log(str == Reverse ? 'palindrome' : 'not palindrome');

// console.log(Reverse == str.replace(/ /g, '').toLocaleLowerCase());

// Write a code to convert centimeter to kilometer.
let cm = 100000;
let km = cm / 100000;
console.log(`${cm} cm is ${km} km `);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”
number = 100000;
// console.log(number.toLocaleString().replace(/,/g, '.'));
// console.log(number.toLocaleString().split(',').join('.'));

// let strNumber = number.toLocaleString('id-ID') + ',00';
console.log(`Rp. ${number.toLocaleString('id-ID') + ',00'}`);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”
str = 'Hello world hello';

console.log(str.replace(/ell/g, ''));
// console.log(str.replace('ell', ''));

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”
str = 'hello world purwadhika';
// let idx = str.indexOf(' ');
// console.log(idx);
// str =
//  str.charAt(0).toUpperCase() +
//  str.substring(1, idx + 1) +
//  str.charAt(idx + 1).toUpperCase() +
//  str.substring(idx + 2, str.length);
// console.log(str);

let capitalize = '';
for (let i = 0; i < str.length; i++) {
 //kapan kita melakukan kapitalisasi?
 //1. huruf awal
 //2. huruf setelah spasi
 // hello world purwadhika

 if (i == 0 || str[i - 1] == ' ') {
  capitalize += str.charAt(i).toUpperCase();
 } else {
  capitalize += str.charAt(i);
 }
}
console.log(capitalize);

// Write a code to reverse a string.
str = 'gudang';
let reverse = '';
for (let i = str.length; i >= 0; i--) {
 reverse += str.charAt(i);
}
console.log(reverse);
