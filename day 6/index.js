let user = {
 name: 'udin',
 greet: () => {
  console.log('Hello ');
 }
}; //cara buat object
user.email = 'udin@mail.com';

let user2 = { ...user }; //shallow copy

console.log(user);
console.log(user2);
user2.address = 'batam';
console.log(user);
console.log(user2);

user.greet();

delete user.email;
console.log(user);

console.log(user['name']);

const arr = [user];

console.log(arr);

arr[0].greet();

let rumah = {
 person: { ...user }
};

rumah.person.age = 21;
console.log(rumah);
console.log(rumah.person?.address);

// frontend = tampilan;
// backend = middleman;
// database = sumber;

// page load => frontend => backend (ambil data) => database => backend => frontend
// ada waktu
rumah.person?.name;
rumah.mobil = { roda: 4 };
console.log(rumah?.mobil?.brand?.top);
// data => undefined? => undefined => undefined

let data = undefined;
// console.log(data.split());

let brand = 'bmw';
let color = 'hitam';
let spion = { kiri: 'kaca cembung', kanan: 'kaca cekung' };
let mobil = { brand, color: 'hijau', spion };
mobil.color = 'merah'; //add
spion.kanan = 'rusak';
console.log(mobil);
mobil.startengine = () => console.log('bremm');

// console.log(Object.keys(mobil));
const keys = Object.keys(mobil);
console.log(keys); //[ 'brand', 'color', 'spion', 'startengine' ]

keys.map((val) => (mobil.val = val)); //mobil["brand"] mobil["color"] mobil.val

console.log(mobil);
let ayam = 'pekok';
let ayam2 = ayam;

let array = [1, 2, 3, 4, 5];
array.map((val, index) => {
 console.log(index);
 array.pop();
});

// let arrPerson = Object.keys(person);

console.log(array);

// for (let key in mobil) {
//  console.log(key);
//  //  console.log(mobil[key]);
//  //  console.log(mobil.key);
// }

let person = {
 name: 'udin',
 location: 'batam',
 get greet() {
  return `${this.name} ${this.location}`;
 },
 set greet(value) {
  let arr = value.split(' '); // ["udin","batam"] ["ujang", "petot", "batam"] ["", undefined]
  this.name = arr[0]; // person.name = arr[0]
  this.location = arr[1]; // person.location = arr[1]
 },
 greet2: (nama) => {
  console.log(`Hello bro ${nama}`);
 },
 setNL: (value, obj) => {
  let arr = value.split(' '); // ["udin","batam"] ["ujang", "petot", "batam"] ["", undefined]
  obj.name = arr[0]; // person.name = arr[0]
  obj.location = arr[1]; // person.location = arr[1]
 }
};

person.age = 27; //assign value property
person.age; // calling value property
person.panggil = () => console.log('hello '); // asssign function ke property
person.panggil();
person.greet; // get = property
// person.greet = '';
person.setNL('Ujang BSD', person);

person.greet2(person.name);

// person.greet = 'ujang BSD';

// console.log(person.greet);
console.log(person.name);
console.log(person.location);

// let personKeys = Object.keys(person);
// console.log(personKeys);

// console.log(person[personKeys[0]]);

let cars = ['bmw', 'ferrari', 'aston martin'];

let [mikhael, obama, barrack] = [...cars];
//mikhael = "bmw"

console.log(barrack);

let car = {
 kaca: '4 kaca',
 roda: '4 roda',
 merek: 'bmw'
};

console.log(car);

let { kacakaca, roda, merek } = { ...car };
console.log(kacakaca);

let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = [...data1, ...data2];
console.log(data3);

const obj1 = {
 name: 'david',
 hello() {
  return 'hello';
 }
};
const obj2 = { email: 'david@mail.com', name: 'david2', hello: 'hello' };

const obj3 = { ...obj2, ...obj1 };
console.log(obj3);
//email : "david@mail.com", name : "david", hello : "hello"

person = {
 firstName: 'Udin',
 lastName: 'David',
 //  greet: () => {
 //   console.log(`Hello ${this.firstName} `);
 //  }
 greet() {
  console.log(`Hello ${this.firstName} `);
 }
};

person.greet();
// Object.keys(obj); // menjadikan keys dari object menjadi sebuah array
// Object.assign(target,source) menambahkan keys dari source ke target (merge)
// Object.create(obj) menciptakan object yang sama dengan paramnya (shallow copy)
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const source2 = { c: 10, d: 5 };

Object.assign(target, source, source2);

// returnedTarget.a = 13;
// console.log(returnedTarget);
console.log(target);
console.log(source);

// console.log(returnedTarget === target);
// Expected output: Object { a: 1, b: 4, c: 5 }

person = {
 name: 'udin',
 isHuman: false,
 printIntroduction: function () {
  console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
 }
};

const me = Object.create(person);
console.log(person);
console.log(me);

console.log(me.printIntroduction());

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
person.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

const object1 = {
 a: 'somestring',
 b: 42
};

console.log(Object.entries(object1));

for (const [key, value] of Object.entries(object1)) {
 console.log(key);
 console.log(value);
}

const obj = {
 prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// Expected output: 42

let obj100 = {}; //object
let Murid = class {
 name = 'udin';
 //jalan dulu
 constructor(param) {
  //   this.name = param;
 }

 greeting() {
  console.log('Selamat Pagi ' + this.name);
 }
}; // template object

mikhael = new Murid('mikhael');
barrack = new Murid('barrack');
obama = new Murid('obama');

mikhael.greeting();
mikhael.name = 'mikhael';
barrack.greeting();
obama.greeting();
console.log(mikhael);
console.log(barrack);

let Baju = class {
 constructor(kerah, warna, size, bahan, brand) {
  this.kerah = kerah;
  this.warna = warna;
  this.size = size;
  this.bahan = bahan;
  this.brand = brand;
 }
};

let uniqlo = new Baju('O neck', 'Hitam', 'L', 'Cotton', 'uniqlo');
let hnm = new Baju('V neck', 'Merah', 'XS', 'polyester', 'h&m');

console.log(uniqlo.warna);
console.log(hnm.warna);

//class
//constructure name,email,age,score
//student 1 = new Student('udin','asas@gmail.com',100,10)
//student 2 = new Student('udin','asas@gmail.com',100,10)
//student 3 = new Student('udin','asas@gmail.com',100,10)
//student 4 = new Student('udin','asas@gmail.com',100,10)

//array = [student1,student2,student3,student4]

//function (array)
//looping array untuk mendapatkan score , age
