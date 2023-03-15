// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
class Roman {
 constructor(roman, value) {
  this.roman = roman;
  this.value = value;
 }
}

function convertRoman(roman = '') {
 let romans = [
  new Roman('I', 1),
  new Roman('V', 5),
  new Roman('X', 10),
  new Roman('L', 50),
  new Roman('C', 100),
  new Roman('D', 500),
  new Roman('M', 1000)
 ];

 console.log(romans);
 let tmp = [];

 roman
  .toUpperCase()
  .split('') // [I,V]
  .map((val, index) => {
   // I == I
   //val = {roman: "I", value : 1}.roman => "I" == val
   //romans.find((rom) => { roman : "I", value: 1}
   let romanValue = romans.find((rom) => rom.roman == val).value;
   //romanValue = 1
   //romanValue = 5
   tmp.push(romanValue); //[1,5]
   tmp[index - 1] < romanValue ? (tmp[index - 1] *= -1) : null;
   //1 < 5 ? true
   //tmp[0] * -1
   //[-1,5]
  });

 return tmp.reduce((prev, curr) => prev + curr);
 //  return res > 3999999
 //   ? 'Enter a valid Roman Numeral or Integer from 1 to 3,999,999.'
 //   : res;
}

console.log(convertRoman('mmx'));
// convertRoman('CCCLXXV');
//iv = 4 [1,5]
// vi = 6 [5,1] => switch
//xvii = 17 [10,5,1,1]
//xix = 19 [10,1,10] => 10 + 10-1 = 19 switch

//I = 1
//V = 5
//X = 10
//L = 50
//C = 100
//D = 500
//M = 1000

//[I,V,X,L,C,D,M]
//[1,5,10,50,100,500,1000]

//[ { roman : 'I', value: 1 }]

//IV = -1+5 = 4 => [-1,5] => 4
//VI = 5+1 = 6 => [5,1] => 6

//looping
// r = "IV"
// I = index 0
// result = []
//arr = [ { roman : 'I', value: 1 }]
//obj = arr.find((val) val.roman == r[0])
//nextObj = arr.find((val) val.roman == r[1])

// obj = { roman : "I", value : 1}
//obj.value < nextObj.value ?
// obj.value * -1
//else
//obj.value

//1 < 5 ?
// 1 * -1
//else
//
//result.push(-1)
//result [-1

//5 < undefined
//else
//result.push(5)
// [-1,5] => sum => -1 + 5 = 4

//VI
//5 < 1 ? false
//result.push(5)

//1 < und
//push(1)
// [5,1] => sum => 5+1 = 6

//obj = arr.find((val) val.roman == r[0])
// // obj =

// if (r[0] < r[1]) {
//  //I

//  result.push(r[0] * -1);
// } else {
//  result.push(r[0]);
// }
