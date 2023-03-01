// declare
// panjang = number
// lebar = number

let panjang = 10;
let lebar = 5;

console.log(panjang * lebar);
console.log(2 * (panjang + lebar));

// luas = panjang * lebar
// keliling = 2 * (panjang + lebar)

//declare
// radius = number
// diameter = 2*radius

let r = 5;
console.log(2 * r);

//sudut segitiga = 180
// sudut = A + B + C
//declare
// sudut a = number
// sudut b = number

// sudut c  = 180 - a - b

let a = 70;
let b = 30;
console.log(180 - a - b);

//declare
// date 1 = date
// date 2 = date

// perbedaan hari  = date2 - date1

let date1 = new Date('2023-03-01');
let date2 = new Date('2023-03-03');
let diff = (date2 - date1) / (1000 * 60 * 60) / 24;
console.log(diff);

// declare
// days = number
// year = number
// month = number
// day = number

// days/365 = sisa bulan
// sisa days/30 = sisa hari
//

let days = 400;
let year = Math.floor(400 / 365);
let month = Math.floor((400 % 365) / 30);
let day = Math.floor((400 % 365) % 30);

// let month = year

console.log(`${days} hari adalah ${year} Tahun ${month} Bulan ${day} hari`);
