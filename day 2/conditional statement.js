let a = 1;
let b = '1';

if (a === b) {
 console.log('masuk');
}

// == membandingkan value
// === membandingkan value dan tipe data
// != tidak sama dengan value
// !== tidak sama dengan value dan tipe data
// <
// >
// <=
// >=

// let grade = 'c';
// if (grade === 'A') {
//  console.log('excelent');
// } else if (grade === 'B') {
//  console.log('great');
// } else if (grade === 'C') {
//  console.log('average');
// } else {
//  console.log('invalid');
// }

//stack
// main declare
// cek kondisi
// console.log

var location = 'BSD';
if (location === 'BSD') {
 console.log('welcome to purwadhika bsd');
} else if (location === 'Jakarta') {
 console.log('welcome to purwadhika Jakarta');
} else if (location === 'Batam') {
 console.log('welcome to purwadhika Batam');
} else {
 console.log('welcome to purwadhika Online');
}

var location = 'BSD';
if (location === 'BSD') {
 console.log('welcome to purwadhika bsd');
} //true
if (location === 'Jakarta') {
 console.log('welcome to purwadhika Jakarta');
}
if (location === 'Batam') {
 console.log('welcome to purwadhika Batam');
} else {
 console.log('welcome to purwadhika Online');
}

//location = ada isi // truthy
// if !location = falsy
location = 1;
console.log(Boolean(location));

if (!location) {
 console.log(location);
}

let bool = 'false';

if (bool) {
 console.log('boolean true');
}

// and , or

let gender = '';
let age = 17;

//gender harus male dan umur harus lebih dari 17

// gender male/female dan umur harus lebih dari 17
if ((gender == 'male' || gender == 'female') && age >= 17) {
 console.log('silahkan masuk ');
}

if (!gender && age) {
 console.log('hello');
}
//kondisi pertama terpenuhi
if (age >= 17) {
 //kondisi di dalam kondisi pertama
 if (gender == 'male') {
  console.log('masuk cowo');
 } else if (gender == 'female') {
  console.log('masuk cewe');
 } else {
  console.log('masuk ?????');
 }
}

let makanan = 'coklat';
let harga = 0;

if (makanan == 'roti') {
 //  let harga2 = 3000;
 harga = 3000;
 console.log(`harga dari ${makanan} adalah Rp. ${harga}`);
 //  console.log('harga dari ' + makanan + ' adalah Rp. ' + harga);
} else {
 harga = 9999999;
 //  console.log(harga2);
}
if (makanan) {
 //  console.log(harga2);
}

console.log(harga);

console.log(
 makanan == 'roti'
  ? console.log(`harga dari ${makanan} adalah Rp. ${harga}`)
  : makanan == 'coklat'
  ? console.log(makanan)
  : makanan == 'duren'
  ? console.log(makanan)
  : console.log('invalid')
);

let warna = 'biru';

console.log(
 `harga dari ${makanan} yang berwarna ${
  warna === 'merah' ? 'merah' : 'biru'
 } adalah Rp. ${harga}`
);
