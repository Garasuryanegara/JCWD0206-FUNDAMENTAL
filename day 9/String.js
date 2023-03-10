let str = new String(`abc`);
let str2 = `ayam ayam goreng`;

console.log(str);
console.log(str2);
console.log(str2.charAt(1)); // karakter index ke 1
console.log(str2.length); //hitung semua karakter di dalam string termasuk spasi
console.log(str2.includes(`ayam`)); // cari kata ayam di dalam string. return true/false
//contoh
if (str2.includes(`ayam`)) console.log(`ada ayam di dalam variable ini`);

console.log(str2.indexOf(`ayan`));
// mencari index per awal karakter dari searchString. ex:  ayam => `a`
// tetapi apabila searchString tidak terdapat di string maka return -1
//indexof selalu yg pertama dari searchString
if (str2.indexOf(`ayam`) == -1)
 console.log(`ga ada kucing di dalam variable itu`);
else console.log(`isi search string terdapat di dalam variable`);

console.log(str2.lastIndexOf(`a`));
//kebalikan indexOf

console.log(str2.slice(0, 4));
//start dari 0 dan banyak karakter
//index 0 = a. 4 = a,y,a,m

console.log(str2.toLocaleUpperCase(`id-ID`));
console.log(str2.toUpperCase()); //huruf besar
console.log(str2.toLowerCase()); //huruf kecil

console.log(str2.replace(/ayam/g, `kucing`)); //replace all ayam to kucing

let number = 10000;
//tulislah => Rp. 10.000
console.log(`Rp. ` + number.toLocaleString(`id-ID`));
console.log(`Rp. ${number.toLocaleString(`id-ID`)}`);

//tulis => "makan gula", kata udin
console.log('"makan gula", kata udin');
console.log("'makan gula', kata udin ");
console.log("Jum'at,");
console.log(`"hello" 'juga' ${'`hello`'}   `);

//split
let array = str2.split(''); //memisahkan per 1 karakter

console.log(array);

console.log('10' - 5);
//"10" => convert jadi number => 10 -5
//"10asd" => convert jadi number => NaN - 5 = NaN
