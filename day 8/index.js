class Employee {
 constructor(name, age, jabatan) {
  this.name = name;
  this.age = age;
  this.jabatan = jabatan;
 }
}

class Salary extends Employee {
 #hour;
 constructor(name, age, jabatan, type = 'part-time') {
  super(name, age, jabatan);
  this.type = type;
 }
 addWorkingHour(hour) {
  if (hour > 0 && hour < 25) this.#hour = hour;
 }
 calculate() {
  let sisa = this.#hour - 6 < 0 ? 0 : this.#hour - 6;
  let wh = this.#hour - 6 > 0 ? 6 : this.#hour;
  if (!this.#hour) {
   return 'belum bekerja';
  }

  let base = this.type == 'part-time' ? 50000 : 100000;
  let ot = this.type == 'part-time' ? 30000 : 75000;

  return 'Rp. ' + (wh * base + sisa * ot).toLocaleString('id-ID');
 }
}

let udin = new Salary('udin', 20, 'coders');
let ujang = new Salary('udin', 30, 'coders', 'fulltime');

udin.addWorkingHour(10);
console.log(udin.calculate());

ujang.addWorkingHour(10);
console.log(ujang.calculate());

class Player {
 constructor(name) {
  this.name = name;
  this.health = 100;
  this.power = 10;
 }
 hit(player = {}) {
  //50 - 40 = 10
  console.log(this);
  return player.health - this.power >= 0
   ? (player.health -= this.power)
   : (player.health = 0);
 }

 useItem(item = {}) {
  this.health += item.health;
  this.power += item.power;
 }

 show() {
  return `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
 }
}

class Shooting {
 constructor(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
 }

 getRandomItem() {
  let random = Math.floor(Math.random() * 4); //0 -3
  switch (random) {
   case 0:
    return { health: 0, power: 0 };
   case 1:
    return { health: 10, power: 0 };
   case 2:
    return { health: 0, power: 10 };
   case 3:
    return { health: 10, power: 10 };
  }
 }

 #turn(p1, p2) {
  p1.useItem(this.getRandomItem());
  p1.hit(p2);
  return p2.health <= 0 ? p1 : false;
 }

 start() {
  let winner;
  let turn = Math.floor(Math.random() * 2) //0-1
   ? ['player1', 'player2']
   : ['player2', 'player1'];
  console.log(this[turn[0]].show());
  console.log(this[turn[1]].show());
  while (true) {
   if (winner) break;
   winner = this.#turn(this[turn[0]], this[turn[1]]); //turn(player1,player2)
   if (!winner) winner = this.#turn(this[turn[1]], this[turn[0]]); //turn(player2,player1)
   console.log(this[turn[0]].show());
   console.log(this[turn[1]].show());
  }

  return `The Winner is Player ${winner.name}`;
 }
}

let player1 = new Player('udin');
let player2 = new Player('ujang');

let shooting = new Shooting(player1, player2);

console.log(shooting.start());
