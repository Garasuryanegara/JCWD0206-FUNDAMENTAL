// Write a code to convert celsius to fahrenheit.
let celsius = 20;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is ${fahrenheit}°F `);

// Write a code to check whether the number is odd or even
let number = 5;

console.log(number % 2 == 0 ? `${number} is even` : `${number} is odd`);
// Write a code to check whether the number is prime number or not
let prime = true;

if (number == 0 || number == 1) prime = false;

//5.5
// 5.5 % 2 == 0? bukan prima
// 5.5 % 3
// 5.5 % 4
// 5.5 % 5
// 5.5 % 6
for (let i = 2; i <= number / 2; ++i) {
 if (number % i == 0) {
  prime = false;
  break;
 }
}
prime
 ? console.log(number + ' is a prime number.')
 : console.log(number + ' is not a prime number.');

// Write a code to find the sum of the numbers 1 to N.
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

let sum = 0;
let text = `${number} → `;
for (let i = 1; i <= number; i++) {
 i == 1 ? (text += ` ${i}`) : (text += ` + ${i}`);
 sum += i;
}
// text = 11 -> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11
// sum = 66
//  text = 11 -> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 = 66

console.log(text + ' = ' + sum);

// Write a code to find factorial of a number.
let factorial = 1;
// n = n * (n-1) ( n-2) (n-3)...
// 5 = 5 * 4 * 3 * 2 * 1
text = `${number} → `;

//i = 1
// 2 <= 5
// 5 -> 1 x 2 x 3 x 4 x 5
// factorial = 120

for (let i = 1; i <= number; i++) {
 i == 1 ? (text += ` ${i}`) : (text += ` x ${i}`);
 factorial = factorial * i;
}
console.log(`Factorial of ${text} = ${factorial}`);

// Write a code to print the first N fibonacci numbers.

// 0, 1 , 1 ,2 ,3 , 5
let temp1 = 0,
 temp2 = 1,
 temp3 = 0;
number = 10;
text = `${number} number(s) of fibonnaci :  ${temp1}, ${temp2}`;
for (let i = 2; i < number; ++i) {
 temp3 = temp1 + temp2;
 text += `, ${temp3}`;
 temp1 = temp2;
 temp2 = temp3;
}
// 10 number(s) of fibonnaci :  0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 10 < 10
// temp3 = 34
//temp1 = 21
//temp2 = 34
console.log(text);
