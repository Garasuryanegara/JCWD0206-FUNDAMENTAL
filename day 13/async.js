// function message() {
//  console.log('async aja');
// }

// setTimeout(message, 3000); //method parameter 1 = cbfunction , parameter 2 = number dalam ms
// console.log('bukan async aja');

//stack [setTimeout(message, 3000), console.log('bukan async aja')]
//stack [settimeout, console.log(bukan async), ...setelah 3 detik dari settimeout dijalankan maka dijalankan message()]

//task1 3 detik
//task2 10 detik
//task3 5 detik

//sync => 3+10+5 = 18 detik
//async => 10 => 10 detik
// async function a() {
//  let i = 0;
//  while (true) {
//   if (i > 10) {
//    console.log('keluar');
//    return;
//   }
//   i++;
//  }
// // }

// const tryPromise = new Promise((resolve, reject) => {
//  let isError = true;
//  if (isError) reject('error'); //isError = true
//  else resolve('success'); // isError = false
// });

// console.log(tryPromise);

// tryPromise
//  .finally(() => console.log('selesai'))
//  .catch((error) => console.log(error))
//  .then((res) => console.log(res));

// async function greet() {
//  return 'hello';
// }

// const asyncAwait = async () => {
//  console.log('satu');
//  await tryPromise
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('selesai'));

//  console.log('dua');
// };

// asyncAwait();

const tryAndCatch = async () => {
 try {
  let a = 123;
  a.map((val) => console.log(val));
 } catch (error) {
  console.log('error');
 }
};

tryAndCatch();

console.log('abc');

const tryThrow = (isFalse) => {
 try {
  if (isFalse) {
   throw 'there is an error';
  }
  console.log('hello');
 } catch (err) {
  console.log(err);
 }
};

tryThrow(true);

// table
// user
// alamat
// produk
// transaksi

// parameter (userid)
// user => userid .=> nama,umur
// alamat => userid => alamat1,alamat2,3alamat3
// transaski =>

arrUser = [
 {
  id: 1,
  username: 'udin1',
  umur: 39,
  nama: 'udin'
 },
 {
  id: 2,
  username: 'beruk',
  umur: 50,
  nama: 'beruk'
 }
];

async function getName(username) {
 try {
  let user = arrUser.find((val) => val.username == username);
  if (!user) {
   throw 'user ga ketemu';
  }
  console.log(user.username);
 } catch (err) {
  console.log(err);
 }
}

getName('udin2');

async function getName2(username) {
 try {
  let user = arrUser.find((val) => val.username == username);
  if (!user) {
   throw new Error('there is an error');
  }
  console.log(user.nama);
 } catch (err) {
  err.message2 = 'errorrrrrrr';
  console.log(err.message + ' ' + err.message2);
 }
}

getName2('udin2');

getName2('udin1');
