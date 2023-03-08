class Product {
 constructor(name, price) {
  this.Name = name;
  this.Price = price;
 }
}

class TransactionProduct extends Product {
 constructor(name, price, qty) {
  super(name, price);
  this.Qty = qty;
 }
}

class Transaction {
 #Total = 0;
 #Products = [];

 addToCart(name, price, qty) {
  let product = new TransactionProduct(name, price, qty);
  this.#Products.push(product);
  this.#Total = 0;
  this.#Products.map((val) => {
   this.#Total = this.#Total + val.Price * val.Qty;
  });
 }

 checkout() {
  return `Rp ${this.#Total.toLocaleString('id-ID')}`;
 }

 transaction() {
  return this.#Products;
 }
}

const transaction = new Transaction();

transaction.addToCart('botol', 5000, 3);
transaction.addToCart('bantal', 2000, 3);

console.log(transaction.checkout());
console.log(transaction.transaction());

//class product name,price
//class transaction total ,[ product (product + qty) ]
//method transaction => addtocart,transaction, checkout

class Produk {
 constructor(name, price) {
  this.name = name;
  this.price = price;
 }
}

// class Transaksi {
//  constructor(name, price, qty) {
//   this.total = 0;
//   this.product = new Produk(name, price);
//   this.product.qty = qty;
//  }
// }

class TransProduct extends Produk {
 constructor(name, price, qty) {
  super(name, price);
  this.qty = qty;
 }
}

class Transaksi {
 #total = 0;
 #products = [];
 //tambah produk? lewat method
 //show semua yg ada di transaksi? method
 //show total ? lewat method

 addToCart(name, price, qty) {
  let product = new TransProduct(name, price, qty);
  this.#products.push(product);
 }

 checkout() {
  this.#total = 0;
  this.#products.map((val) => (this.#total += val.price * val.qty));

  return `Rp ${this.#total.toLocaleString('id-ID')},00`;
 }

 transaction() {
  return this.#products;
 }
}

const transaksi = new Transaksi();
transaksi.addToCart('sepatu', 5000, 3);
transaksi.addToCart('sepeda', 8000, 2);

console.log(transaksi.transaction());
console.log(transaksi.checkout());

//bikin 2 object berbeda
// let obj1 , let obj2

//function diff 2 parameter obj1,obj2

let obj1 = {
 nama: 'a',
 umur: 20
};

let obj2 = {
 nama: 'a',
 umur: 20,

 alamat: 'batam'
};

function diff(obj1, obj2) {
 let arr1 = Object.keys(obj1);
 let arr2 = Object.keys(obj2);

 if (arr1.length != arr2.length) {
  return false;
 }
 for (let i = 0; i < arr1.length; i++) {
  if (obj1[arr1[i]] != obj2[arr2[i]]) {
   console.log('beda');
   return false;
  }
 }
 return true;
}
console.log(diff(obj1, obj2));

//function intersec 2 parameter objects
//2 objects => array => tau nama keys
//
function intersec(obj1, obj2) {
 let arr1 = Object.keys(obj1);
 let arr2 = Object.keys(obj2);

 let result = {};
 console.log(arr1);
 console.log(arr2);

 //bandingkan index 0 dengan seluruh index dari arr2
 //bandingkan index 1 dengan seluruh index dari arr2

 arr1.map((val, index) => {
  //index =0
  //   for (let i = 0; i < arr2.length; i++) {
  //    if (arr2[i] == arr1[index]) {
  //     result[val] = obj1[val];
  //    }
  //   }
  //a

  arr2.map((val2) => {
   //a
   if (val2 == val) {
    result[val] = obj1[val];
   }
  });
 });

 //  arr1.map((val) => {
 //   //   true arr2.includes('a')
 //   //   false arr2.includes('b')
 //   if (arr2.includes(val)) {
 //    result[val] = obj1[val];
 //   }
 //  });

 //  arr2.includes("a")
 return result;
}

obj1 = {
 a: 10,
 b: 2
};
obj2 = {
 a: 1,
 c: 3
};

console.log(intersec(obj1, obj2));

let arr = [
 { name: 'Student 1', email: 'student1@mail.com' },
 { name: 'Student 2', email: 'student2@mail.com' }
];
let arr2 = [
 { name: 'Student 1', email: 'student1@mail.com' },
 { name: 'Student 3', email: 'student3@mail.com' }
];

console.log(Object.assign(arr, arr2));

// arr.map((val)=> {

// })
// console.log();

//Input : [{ name: 'Davi', age: 20 }]
//Output : [{ David: ‘name’, 20: ‘age’}]

function switchObj(arr = []) {
 let output = [];

 arr.map((val) => {
  let tempObj = {};
  for (const [key, value] of Object.entries(val)) {
   console.log(key);
   console.log(value);

   tempObj[value] = key;
  }
  output.push(tempObj);
 });

 return output;
}

console.log(
 switchObj([
  { name: 'David', age: 20 },
  { name: 'Punk', age: 15 }
 ])
);

//faktorial

function faktorial(n) {
 let result = 1;
 for (let i = 0; i < n; i++) {
  result *= n - i;
 }
 return result;
}

function faktorial2(n, sum = 1) {
 let result = sum;
 if (n == 1) {
  console.log(sum);
  return result;
 }

 faktorial2(n - 1, (sum *= n));
}
let result = faktorial2(5);
console.log(result);
// console.log(faktorial2(5));

// faktorial2(5);
// console.log(faktorial(5));
