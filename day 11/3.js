// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function staircase(n) {
 //0 1 1 2 3 5
 //[1,2] => 1 +2 = [1,2,3] => 2 + 3 => [1,2,3,5]
 let arr = [1, 2];
 for (let i = 1; i <= n - 2; i++) {
  console.log(i);
  //n = 5. loop 5-2 = 3
  //1+2 = 3 [1,2,3] loop 1
  //2+3 = 5 [1,2,3,5] loop 2
  //3+5 = 8 [1,2,3,5,8] loop 3
  let fibo = arr[i - 1] + arr[i];
  arr.push(fibo);
 }
 return console.log(`terdapat ${arr[n - 1]} kemungkinan`);
}
//[1,2,3,5]
staircase(1);
