function pascal(rows = 0) {
 let t = [[1]];
 for (let i = 1; i < rows; i++) {
  let temp = [];
  for (let j = 1; j <= t[i - 1]?.length - 1; j++) {
   temp.push(t[i - 1][j - 1] + t[i - 1][j]);
  }
  t.push([1, ...temp, 1]);
 }
 return t;
}
console.log(pascal(3));
