let result;

greet('ayam');
arigatou(); // result = arigatou

function hello() {
 greet('hello');
}

function arigatou() {
 greet('arigatou!');
}

function greet(str) {
 result = str;
}

// arigatou(); // result = arigatou
// hello(); // result = hello

//sequence control
//1st way
function calculator(a, b) {
 displayer(a + b);
}

function displayer(something) {
 console.log(something);
}

calculator(1, 1);
//panggil calculator => task manggil displayer (1+1 ) => console.log(2)

//2nd way
function calculator2(a, b) {
 return a + b;
}

function multiply(a, b) {
 return displayer(a * b); // return undefined
}

let hasil = calculator2(1, 2); //return hasil 1 + 2
let hasil2 = calculator(1, 2); //ga return tetapi langsung console.log(1+2)
console.log(hasil * 300);
console.log(hasil2);

//callback

let array = [1, 2, 3, 4];
array.map((valueOfArray) => console.log(valueOfArray));

let array2 = [{ a: 'a' }, { b: 'b' }];
array2.map((value) => console.log(value.a));
//callback adalah function di dalam argument
//apakah semua argument merupakan callback? bukan
//karena hanya argument berbentuk function saja yg disebut callback

function calculator3(a, b, callback) {
 callback(a + b);
}

calculator3(1, 2, displayer);

function calculator4(
 a,
 b,
 callback = (something) => {
  console.log(something);
 }
) {
 callback(a + b);
}

//saat buat function calculator4(param1,param2,param3) param1-3 adalah sebuah variable
// saat kita panggil calculator4(isiparam1,isiparam2,isiparam3) reassign variable di parameter
//apabila parameter/variable yg kita assign merupakan sebuah function maka disebut callback

calculator4(5, 3);
