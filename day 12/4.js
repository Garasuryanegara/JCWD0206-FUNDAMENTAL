// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4] min =infinity ,min = 0/7. min > curr ? Min = curr
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function cuan(prices = []) {
 let min = { index: 0, value: 0 };
 min.value = Math.min(...prices);
 min.index = prices.indexOf(min.value);
 let max = { index: 0, value: 0 };
 for (let i = min.index; i < prices.length; i++) {
  if (max.value < prices[i]) {
   max.value = prices[i];
   max.index = i;
  }
 }
 return max.value - min.value;
}

// console.log(cuan([10000, 2, 3, 4, 100, 7, 8]));
console.log(cuan([10, 4, 3, 2, 9, 1, 3]));
//val = 10
//i = 1
// prices[i] = 4
//max = 4, max = 9
//arrcuan.push(10-9) = -1
//arrcuan = [-1,]
//val =4
//max = 9
//arrcuan.push(9-4) = 5
//arrcuan = [-1,5,]

function cuan2(prices = []) {
 let arrCuan = [];
 prices.map((val, index) => {
  let max = 0;
  for (let i = index + 1; i < prices.length; i++) {
   if (max < prices[i]) {
    max = prices[i];
   }
  }
  arrCuan.push(max - val);
 });
 return Math.max(...arrCuan);
}

console.log(cuan2([10, 4, 3, 2, 9, 1, 3]));
//min = 5
//loop 1x => 3 > 1= 2

//10, 4, 3, 2, 9, 1, 3
// profit = 2 => 3-1
// profit = 7 => 9 -2
