// function sum(a, b) {
//  return a + b;
// }

// function multiply(a, b) {
//  return a * b;
// }

// module.exports = { sum, multiply };

let Qty = '1';

console.log(parseInt(Qty.match(/^-?\d+$/)));
if (!isNaN(parseInt(Qty.match(/^-?\d+$/)))) {
 //task

 console.log('ini bukan number');
}
