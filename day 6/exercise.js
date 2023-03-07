const Student = class {
 constructor(name, email, birthdate, score) {
  this.name = name;
  this.email = email;
  this.birthdate = new Date(birthdate);
  this.score = score;

  this.age = Math.floor(
   (new Date() - new Date(birthdate)) / (1000 * 60 * 60 * 24 * 365)
  );
 }
};

const HLA = class {
 constructor(Highest, Lowest, Average) {
  this.Highest = Highest;
  this.Lowest = Lowest;
  this.Average = Average;
 }
};

let udin = new Student('udin', 'udin@mail.com', '1996/01/21', 100);
let ujang = new Student('ujang', 'ujang@mail.com', '1999/05/21', 20);
let richard = new Student('richard', 'r@mail.com', '1998/03/21', 90);

const students = [udin, ujang, richard];
console.log(students);
const calculate = (students = []) => {
 const findMin = (arr = [], type = 'age') =>
  arr.reduce((min, value) => {
   return value[type] < min[type] ? value : min;
  })[type];

 //students [{udin}, {ujang}, {richard}]
 // udin age = 27 , ujang  =23 , richard = 24

 // findMin(students,"age")
 // ujang.age < udin.age
 //  23 < 27 ? : ujang

 // min = object ujang
 // richard.age < ujang.age

 //  24 < 23 ? false return ujang

 //arr.reduce = object ujang
 //return findMin ujang.age

 const findMax = (arr = [], type = '') =>
  arr.reduce((min, value) => {
   return value[type] > min[type] ? value : min;
  })[type];

 const findAvg = (arr = [], type = '') =>
  (
   arr.reduce((avg, value, idx) => {
    return idx == 1 ? avg[type] + value[type] : avg + value[type];
   }) / arr.length
  ).toFixed(2);

 //students [{udin}, {ujang}, {richard}]
 // udin age = 27 , ujang  =23 , richard = 24

 // idx ==1 ? true
 // udin.age + ujang.age = 50
 // avg = 50

 //2 ==1 ? false
 // 50 + richarcd.age
 // 50 + 24 = 74

 let Score = new HLA(
  findMax(students, 'score'),
  findMin(students, 'score'),

  findAvg(students, 'score')
 );

 let Age = new HLA(
  findMax(students, 'age'),
  findMin(students, 'age'),
  findAvg(students, 'age')
 );
 return { Score: { ...Score }, Age: { ...Age } };
};

console.log(calculate(students));

// let date = new Date('1996/01/21');
// let currDate = new Date();
