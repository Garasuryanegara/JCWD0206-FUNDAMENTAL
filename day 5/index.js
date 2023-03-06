//declare function

function a(b = '') {
 console.log(b + ' hello ');
}

a('mamat');

//express function
const MinMax = (arr = []) => {
 //  const min = arr.reduce((sum, curr) => (sum > curr ? curr : sum));
 // reduce = 3 param . total , current
 //array = 1,2,3
 //return curr
 // total = total + curr

 //total = ""
 // curr = 1
 // sum = 1

 //curr 2
 //sum = 1
 // sum = 1

 const min = Math.min(...arr);
 //  const max = arr.reduce((sum, curr) => (sum < curr ? curr : sum));
 const max = Math.max(...arr);

 const avg = arr.reduce((sum, curr) => (sum += curr)) / arr.length;
 return `Min = ${min} Max = ${max} Avg = ${avg.toFixed(2)}`;
};

console.log(MinMax([1, 2, 3, 4]));

const arrToString = (arr = []) => {
 const string = arr.reduce((sum, curr, idx) =>
  idx + 1 == arr.length
   ? sum.toString() + ' and ' + curr.toString()
   : sum.toString() + ', ' + curr.toString()
 );

 console.log(string);
};
// a,
//a, y, a
//

arrToString('ayam'.split(''));

const arr = [1, 2, 3];
const arr2 = [2, 3, 4];

const calculate = (arr1 = [], arr2 = []) => {
 return arr1.map((val, idx) => val + arr2[idx]);
};

console.log(calculate(arr, arr2));

const addArray = (arr = [], element) => {
 arr.find((val) => val == element) ? null : arr.push(element);
 return arr;
};

console.log(addArray([1, 2, 3, 4], 9));
