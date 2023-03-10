//Number

let angka = 10000;

let inf = Infinity; //angka terbesar se-JAVASCRIPT
let minInf = -Infinity; //angka terkecil se-JAVASCRIPT

let strNumber = angka.toString(); //cara 1 mengubah angka ke string
let strNumber2 = angka + '';

console.log(angka.toLocaleString('id-ID')); //currency
console.log(angka.toFixed(2)); //decimal
console.log(angka.toExponential()); //eksponen

let eks = angka.toExponential();

console.log(10000000000000000000000000000000000000000000000 > inf);

console.log(strNumber); //string number

console.log(strNumber2); //string number

console.log(angka++); //angka =+ 1 postFix
console.log((angka += 1)); //angka += 1 preFix
