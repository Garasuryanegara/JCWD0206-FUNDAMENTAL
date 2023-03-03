//array

var arr = [];
console.log(arr);

var arr = [1, 2, 3, 4, 5];

var arr = new Array(1, 2, 3, 4, 5, 7, 8);

arr = ['a', 'b', 'c'];

console.log(arr[0] + arr[1] + arr[2]);
console.log(arr.toString().replace(/,/g, '')); //abc
console.log(arr.join('/')); // a/b/c
console.log(arr.pop()); //menghapus index terakhir dan return value index terakhir
console.log(arr); // [a,b]
console.log(arr.push('e')); //menambah 1 index baru di akhir array dan return value length terbaru
console.log(arr); // [a,b,e]
console.log(arr.shift()); //menghapus index pertama dan return value index pertama
console.log(arr); // [b,e]
console.log(arr.unshift('f')); //menambah 1 index baru di awal array dan return value length terbaru
console.log(arr); //[f,b,e]
console.log(arr.length);

let arr2 = ['x', 'y', 'z'];
let arr3 = arr.concat(arr2);
console.log(arr.concat(arr2)); //menggabungkan 2 array dan return value array
console.log(arr);
console.log(arr3);

arr = [1, 2, 3];
arr2 = [4, 5, 6, [8, 9, 10, 11, [12, 13, 14, 15]]];

//write your code here
arr = arr.concat(arr2);
// arr.push(arr2);

// console.log(arr[6][1]); //expected [1,2,3,4,5,6]

// console.log(arr[6][4][0]); //9
// console.log(arr[6][4][3]); //15
console.log(arr);

for (let i = 0; i < arr.length; i++) {
 for (let j = 0; j < arr[i].length; j++) {
  for (let k = 0; k < arr[i][j].length; k++) {
   console.log(arr[i][j][k]);
   //arr[6][4][0]
   //arr[6][4][1]
   //arr[6][4][2]
   //arr[6][4][3]
   //4 < 4 false
  }
 }
}

console.log(arr);
arr[6][4].splice(0, 4); //delete start with index 0, deletecount = 3
console.log(arr);

arr.push(1);
arr.push(1);
arr.push(1);
arr.push(1);
arr.push('z');
arr.push('a');
arr[6].push('c');
arr[6].push('a');

console.log(arr.slice(0, 6));
console.log(arr);
console.log(arr.indexOf(1)); //menemukan letak index dari value 1 yang pertama kali ditemukan

console.log(arr.lastIndexOf(1)); //menemukan letak index dari value 1 yang terakhir kali ditemukan

arr.sort(); //mengurutkan value kecil ke besar dari sebuah array
console.log(arr);
console.log(arr.indexOf(6));
arr[10].sort();
console.log(arr);
arr.reverse();
console.log(arr);
//method apa saja yg mempengaruhi origin array?
//push,pop,shift,unshift,splice,sort, reverse

arr = ['Jakarta', 'Bandung', 'Batam', 'Bali'];

for (let i of arr) {
 console.log('Kota ' + i);
}

for (let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}

//loop menggunakan map dengan hasil return sebuah array
let newArr = arr.map((val) =>
 val == 'Jakarta' || val == 'Bali' ? val : undefined
);
console.log(arr);
//loop menggunakan filter hasil return sebuah array yang disaring sesuai dengan kondisinya
let filteredArr = arr.filter((val) => val == 'Jakarta' || val == 'Bali');

let find = arr.find((val) => val != 'Bandung');
//loop menggunakan find hasil return sebuah value yang disaring sesuai dengan kondisi

//callback function
// () => {
//     //logic
// //return
// }
//arrow function
// ()=> 1

console.log(newArr);
console.log(filteredArr);
console.log(find);
