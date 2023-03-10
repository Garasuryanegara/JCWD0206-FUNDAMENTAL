let arr = [10, 11, 12, 13];
console.log(arr);

arr.push(1); //menambahkan ke index terakhir => [1]
arr.pop(); //hapus element/index terakhir dari array =>[]
arr.shift(); //hapus element/index paling depan dari array
arr.unshift(2); //menambahkan ke index paling depan = > [2]
console.log(arr);
let join = arr.join(' '); //kebalikan split. mengubah array jadi string. separator diganti dengan parameter
console.log(join);
console.log(arr.indexOf(11)); //sama dengan string
console.log(arr.lastIndexOf(12)); //sama dengan string
console.log(arr.findIndex((val, index) => val == 11)); //if true return index
console.log(arr.find((val) => val == 11 || val == 12)); //if true return value
console.log(arr.filter((val) => val == 11 || val == 12)); //if true return array[value]
() =>
 //arrow
 () => {
  console.log('asd');
  return 100;
 }; //cb

arr.length; //panjang array
console.log(arr.map((val, index) => (val == 11 ? 'siap' : 'salah'))); //looping array arr

console.log(arr.reduce((prev, current, index) => prev + current));
//prev = value dari index 0
//current = value dar index 1 sampai seterusnya

//[1,2,3,4,5] => sum jadi ? 15

let arrNum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
 sum += arrNum[i];
} //sum menggunakan for loop
console.log(sum);

sum = 0;
let i = 0;
while (i < arrNum.length) {
 sum += arrNum[i];
 i++;
} //sum menggunakan while loop
console.log(sum);

sum = 0;
arrNum.map((val) => (sum += val));
console.log(sum);
sum = 0;
console.log(arrNum.map((val) => (sum += val))[arrNum.length - 1]); // cara menggunakan map tapi maksa

console.log(arrNum.reduce((prev, curr) => prev + curr)); // sum menggunakan reduce

//shallow copy
//wajib spread pada saat menciptakan instance
//apapun yg kita lakukan terhadap arrCopyNum tidak akan mempengaruhi arrNum
let arrCopyNum = [...arrNum];
//deep copy
let arrRefNum = arrNum;
//arrRefNum sebagai reference dari arrNum
//sehingga apapun yg kita lakukan terhadap arrRefNum
// akan berpengaruh terhadap arrNum begitupun sebaliknya
