//1
const segitiga = (n) => {
 let number = 1;
 let result = '';
 for (let i = 1; i <= n; i++) {
  let str = '';
  // 1 <= 10
  //2 <= 10
  // 3 <= 10
  //4 <= 10
  //5 <= 10

  for (let j = 1; j <= i; j++) {
   // 1 <= 1
   //str = 01
   //number = 2

   //2 <= 2
   // str = 02 03
   //number = 4

   //3 <= 3
   // str = 04 05 06
   //number = 7

   //4 <=4
   //str = 07 08 09 10
   //number = 11

   //5 <= 5
   //str = 11 12 13 14 15
   // number = 16

   if (number < 10) str += '0' + number + ' ';
   else str += number + ' ';
   number++;
  }
  result += str + '\n';

  //res =   01
  //        02 03
  //        04 05 06
  //        07 08 09 10
  //        11 12 13 14 15
 }
 return result;
};
console.log(segitiga(10));

//2
const fizzBuzz = (n) => {
 str = '';

 for (let i = 1; i <= n; i++) {
  //1 <= 15
  // str = 1

  //2 <= 15
  //str = 1 2

  //3 <= 15
  //str = 1 2 Fizz
  //

  //4 <= 15
  //str = 1 2 Fizz 4

  //5 <=15
  //str = 1 2 Fizz 4 Buzz

  //5%3 = 2
  //5%5 = 0 //false true

  if (!(i % 3) && !(i % 5)) str += 'FizzBuzz ';
  else if (!(i % 3)) str += 'Fizz ';
  else if (!(i % 5)) str += 'Buzz ';
  else str = str + i + ' ';
  //   str += ' ';
 }
 return str;
};
console.log(fizzBuzz(15));

//3
function BMI(w, h) {
 let bmi = w / h ** 2;

 if (bmi < 18.5) {
  return 'less weight';
 } else if (bmi >= 18.5 && bmi <= 24.9) {
  return 'ideal';
 } else if (bmi >= 25 && bmi <= 29.99) {
  return 'overweight';
 } else if (bmi >= 30 && bmi <= 39.9) {
  return 'very overweight';
 } else {
  return 'obesity';
 }
}
console.log(BMI(73, 1.77));

//4
const removeOdd = (...arr) => {
 return arr.filter((val) => val % 2 == 0);
};
console.log(removeOdd(1, 2, 3, 4));

function test(...abc) {
 console.log(abc);
} //rest param
test(1, 2, 3, 4, 5); // console.log([1,2,3,4,5])

function test2(abc) {
 console.log(abc);
}
let arr = [1, 2, 3, 4];
//test2(1,2,3,4)
//test2([1,2,3,4])
test(...arr);
test(arr);
// test2(...arr);

function test3(a, b, c) {
 console.log(a + b);
 //  console.log(undefined + undefined + []);
 //  console.log(null + null + []);
 //  console.log(NaN + NaN + []);
}
arr = [10, 9, 8, 7];
test3(...arr); //[10,9,8,7] undefined undefined

//5
const string2Arr = (str) => {
 return str.split(' ');
};

console.log(string2Arr('ayam goreng'));
//split = string jadi array
//["ayam","goreng"]

//shallow copy vs deep copy

const array = [1, 2, 3];
let tempArray = array; //deep copy
let tempArray2 = [...array]; //shallow copy
let number = 5;
let tempNumber = number;
tempNumber++;
tempArray.push(4);

console.log(tempArray); //[1,2,3,4]
console.log(array); //[1,2,3]
console.log(tempArray2);

let a = [1, 2, 3];
let b = [...a];
let c = a;
b.push(4);
console.log(a);
console.log(b);
c.push(5);

console.log(a);
