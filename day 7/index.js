class User {
 constructor() {}
}

const User2 = class {
 static bio = 'helo bro';
 name = 'ayam';
 #email;
 constructor(name, lastname, email) {
  this.name = name;
  this.lastname = lastname;
  this.#email = email;
 }

 greet() {
  console.log(`hello ini ${this.name}`);
 }

 panggilNama = () => {
  console.log(`hello saya ${this.name}, email saya adalah ${this.#email}`);
 };

 get fullName() {
  return `${this.name} ${this.lastname}`;
 }

 set fullName(values) {
  let arrFullName = values.split(' ');
  this.name = arrFullName[0];
  this.lastname = arrFullName[1];
  this.#email = arrFullName[2];
 }

 ubahEmail(email) {
  this.#email = email;
 }
};

const udin = new User2('udin', 'ujang', 'udin@mail.com');
console.log(udin);
udin.panggilNama();
udin.email = 'abc@mail.com';
udin.fullName = 'richard omar richard@mail.com';
udin.ubahEmail('aaa@mail.com');

console.log(udin.email);

udin.panggilNama();

// model //class => table di database
// view //frontend
// controller //backend

//username , email, password

class DB {
 static #connection = '';

 constructor(jumlah) {
  this.jumlahterkoneksi = jumlah;
 }

 static #initializeConnection() {
  const randomNum = Math.ceil(Math.random() * 100);
  DB.#connection = `New Database Connection ${randomNum}`;
 }

 static getConnection() {
  if (!DB.#connection) {
   DB.#initializeConnection();
  }
  return DB.#connection;
 }
}
//class menghubungkan program kita dengan database
// menghubungkan lewat connection
console.log(DB.getConnection());
DB.connection = 'hello';
console.log(DB.connection);

const a = new User2('name', 'lastname', 'email');
a.name; // karena dia bukan static props

User2.bio;

const koneksi = new DB(10);
console.log(koneksi);

//encap

class Employee {
 #employeeName;
 employeeName;
 #age;
 //  constructor() {
 //   this.#employeeName;
 //  }

 getEmployeeName() {
  return this.#employeeName;
 }

 setEmployeeName(newName) {
  this.#employeeName = newName;
 }

 getEmployeeAge() {
  return this.#age;
 }

 setEmployeeAge(age) {
  if (typeof age == 'number') {
   this.#age = age;
  } else {
   console.log('bukan number');
  }
 }
}

const anakBaru = new Employee();
console.log(anakBaru.getEmployeeName()); //undefined
anakBaru.setEmployeeName('Abart');
console.log(anakBaru.getEmployeeName()); // Abart
anakBaru.setEmployeeAge(100);
console.log(anakBaru.getEmployeeAge());

//inherit

class Product {
 constructor(ProductName, Price) {
  this.ProductName = ProductName;
  this.Price = Price;
 }
}

class Book extends Product {
 constructor(produk, harga, author) {
  super(produk, harga); //memanggil contructor dari Product
  this.author = author;
 }
}

class Perpus extends Book {
 constructor(produk, harga, author, lokasi) {
  super(produk, harga, author);
  this.lokasi = lokasi;
 }
}

const jungleBook = new Book('Jungle Book', 3000, 'Jordan');

console.log(jungleBook);
//cons book

//cons product
// rest of the code
