let result = 'jason naik kuda';
let count = 3;
// do {
// switch(count %3 ==0){
//      case 0 :
//     default:

// }

// }while()

// console.log(count % 3 == 0);
// count % 3; hasil false karena return 0
// count % 3 == 0 ; return

switch (count % 3 == 0) {
 case 0:
  console.log('asd');
 case 1: //===
  console.log('chris');
 default:
  console.log('abc');
}

//jason naik kuda
//3
let a = result.slice(3, 23);
console.log(a);
a = a.slice(2, 23);
console.log(a);
a = a.slice(1, 23);
console.log(a);

let buah = 'jeruk bali';
console.log(buah.slice(undefined, 5));

let arr = [1, 2, 3, 4, 5];
let abc = 1;

arr.forEach((val) => {
 abc += val;
});

console.log(
 arr.forEach((val) => {
  return val;
 })
);

console.log(abc);

let Qty = 'abc';

console.log(!isNaN(parseInt(Qty.match(/^-?\d+$/))));

console.log(typeof console.log);

console.log(false + true + true + '' + false);
