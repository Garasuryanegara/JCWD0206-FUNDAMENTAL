let n = 105;
let tempN = n;
let digit = '';
let h = 0;
let counter = 1;

while (true) {
 h++;
 digit += '*';
 tempN -= counter;
 counter++;
 if (tempN < 1) {
  break;
 }
}
console.log(digit);

//h = 1
//digit = " "
//tempN = 9
// counter = 2

// h =2
// digit = "  "
//tempN = 7
//counter = 3

// h = 3
// digit = "   "
// tempN = 4
//counter = 4

// h = 4
// digit = "    "

// tempN = 0
// n= 10

//
//      1
//     2 3
//    4 5 6
//   7 8 9 10
//11 12 13 14 15

let num = 0;
let result = '';

for (let i = 1; i <= h; i++) {
 let str = '';
 for (let j = 0; j < i && n > num; j++) {
  num++;
  if (j == 0) {
   str = digit.slice(0, Math.ceil(digit.length - i));
   if (num > 10 && num < 100) str += ` ${num} `;
   else if (num > 100) str += `${num} `;
   else str += `   ${num} `;
  } else {
   str += `${num} `;
  }
  //num = 1
  // **** *
  // str = ****
  // str = **** 1

  //num = 2
  // *** **
  // str = ***
  //str = *** 2

  //num = 3
  // str = *** 2 3

  //num = 4
  //str = **
  //str = ** 4

  //num =5
  // str = ** 4 5

  //num = 6
  // str = ** 4 5 6

  //num  = 7
  //str = *
  //str = * 7

  //num = 8
  //str = * 7 8

  //num = 9
  //str = * 7 8 9

  //num = 10
  //str = * 7 8 9 10

  //num = 11
  //str =
  //str = 11
 }

 //  str =  '**** 1
 //          '
 // result = **** 1
 //          *** 2 3
 //          ** 4 5 6
 //          * 7 8 9 10
 //          11
 str += '\n';
 result += str;
}

console.log(result);

// //          1
// //         2 3
// //        4 5 6
// //       7 8 9 10
