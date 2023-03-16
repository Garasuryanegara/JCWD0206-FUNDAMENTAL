const data = require('./data.json');

// const a = { a: 'a' };
// const b = JSON.stringify(a);
// const c = JSON.parse(b);
// console.log(c);

const calcs = require('./functions');
const { calculator1, calculator2 } = require('./functions');
console.log(calculator1(2, 5));
console.log(calcs);
// console.log(calcs.calculator1(2, 5));
// console.log(calcs.calculator2(2, 5));

// console.log(data);

function getUserById(id) {
 try {
  const user = data.users.find((val) => val.id == id);
  const { username, name } = user;
  const laptop = data.laptops.find((val) => val.userId == id);
  console.log(
   `user dengan username ${username} memiliki laptop ${laptop.nama}`
  );
 } catch (err) {
  console.log('error user id = ' + id + ' tidak ditemukan');
 }
}

getUserById(1);

// users: [
//     { id: 1, name: 'udin', age: 39, username: 'udin1' },
//     { id: 2, name: 'ujang', age: 25, username: 'jan9' },
//     { id: 3, name: 'ujung', age: 27, username: 'jung' }
//   ],

// users.find((val)=> val.id == id)
