let palindrome = 'nenek'; // store palindrome in variable
let arrAlpha = 'abcdefghijklmnopqrstuvwxyz'.split(''); //buat array of letters
palindrome = palindrome.split('');

console.log(arrAlpha);
console.log(palindrome);

palindrome = palindrome.filter((letter) => arrAlpha.includes(letter));
// arralpha.includes("r")
// arralpha.includes("a")
// arralpha.includes("c")
// arralpha.includes("e")
// arralpha.includes("c")
// arralpha.includes("a")
// arralpha.includes("r")
console.log(palindrome.reverse().join(''));
console.log(palindrome.join(''));
let reverse = [...palindrome];

console.log(
 reverse.reverse().join('') == palindrome.join('')
  ? 'palindrome'
  : 'bukan palindrome'
);

//contoh soal

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

//declare variable s , t
//cek length s, t
//s, t displit jadi array
//s,t sort , join
// if s == t ? true : false

function anagram(s, t) {
 if (s.length != t.length) {
  return console.log(false);
 } else {
  s = s.split('').sort().join();
  t = t.split('').sort().join();
  if (s == t) {
   return console.log(true);
  } else {
   return console.log(false);
  }
 }
}

function anagram2(s = '', t = '') {
 if (s.length != t.length) {
  return console.log(false);
 } else {
  for (const letter of t) {
   //k,a,n,m,a
   if (!s.includes(letter)) {
    return console.log(false);
   }
   s.replace(letter, '');
   //m,a,k,a,n
   //true,true,true,true,true
  }
  return console.log(true);
 }
}

anagram('makan', 'kanmu');

anagram2('makan', 'kanma');

//linear search
function linearSearch(arr, x) {
 for (let i = 0; i < arr.length; i++) {
  if (arr[i] == x) {
   return i; // return index
  }
 }
 return -1; // not found
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 5)); //index 4

//bubble sort
function bubbleSort(arr) {}

console.log(bubbleSort([5, 3, 8, 4, 6]));

//variable arr
//looping sebanyak length
//per looping if (kiri < kanan) dont switch

function bubble2(arr = [], number = 0) {
 arr.map((val, idx) => {
  if (val > arr[idx + 1]) {
   if (number < arr[idx + 1]) {
    number = val; // 5
   }
   arr[idx] = arr[idx + 1];
   arr[idx + 1] = val;
  }
 });
 //5, 3, 8, 4, 6
 //5 > 3?
 //0 < 3? number = 5
 // 3,5,8,4,6

 // 8 > 4 ? true
 // 5 < 4? false
 //number = 5
 // 3,5,4,8,6

 // 8 > 6? true
 // 5 < 6? number = 6
 // 3,5,4,6,8

 //3>5 ? false
 // number = 0
 //5>4? true
 //number = 4
 //3,4,5,6,8

 if (number > 0) {
  return bubble2(arr);
 } else {
  return arr;
 }
}

//3 < 5 ? 3,5
//var = 5
// 8<4 ? 4,8
//cek 5 >4 ?

console.log(bubble2([5, 3, 8, 4, 6]));
