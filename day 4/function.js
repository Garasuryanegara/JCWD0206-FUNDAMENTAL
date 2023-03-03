function square(a) {
 //task
 console.log(a * a);
}

function square2(a) {
 //task
 // let x= 100
 return (a * a).toLocaleString();
}

function example() {
 return 100;
 console.log('hello');
}

function gender(a = 'male') {
 if (a == 'male' || a == 'female') {
  return 'cowok dan cewek';
 }
 return 'NB';
}

function tambah10(arr) {
 arr.push(10);
 return arr;
}

function loop(n) {
 for (let i = 0; i < n; i++) {
  console.log(i);
  if (i == 2) {
   break;
  }
 }

 let arr = [1, 2, 3, 4];

 let newArr = arr.map((val) => {
  return val + 1;
 });
 console.log(newArr);

 console.log('masih masuk');
}

loop(5);

console.log(tambah10([1, 2, 3, 4]));

console.log(gender('cwk'));

let b = 10000;
console.log(square);
console.log(square(5));
console.log(square2(b));

const func = function (a) {
 return a * a;
};

const func2 = (a) => a * a;
const func3 = func2(4);

console.log(func(3));
console.log(func2(3));
console.log(func3);

function m(a, b = 1) {
 return a * b;
}

console.log(m(4));

//nested function

function location(name) {
 return ' Batam ' + name;
}

// function getMsg(firstName) {
//  function sayHello() {
//   return 'Hello ' + firstName + ' ';
//  }

//  function welcome() {
//   return 'Welcome to Purwadhika';
//  }

//  return sayHello() + welcome() + location(firstName);
// }

const getMsg = (firstName) => {
 function sayHello() {
  return 'Hello ' + firstName + ' ';
 }

 function welcome() {
  return 'Welcome to Purwadhika';
 }

 return sayHello() + welcome() + location(firstName);
};

console.log(getMsg('udin'));

function multiplier(factor) {
 return function (number) {
  return number * factor;
 };
}

const mul2 = multiplier(4);
// mul2 = function (number) {
//  return number * 4;
// };
console.log(mul2(9));

const mul3 = multiplier(3);

console.log(mul3(5));
