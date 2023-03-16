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
console.log(pascal(10));

//t = [[1]]
//for i = 1; i < rows;i++ // 3-1 => 2x
//tinggi nomor 2, tinggi nomor 3
// 1, ????, 1. ??? jumlahnya sesuai dengan length diatasnya dikurang 1

//for(j=1;j <= t[i-1].length - 1; j++)
//for(j=1;1 <= t[0].length -1 , j++)
//let temp = []
//for(j=1;1 <= 0 , j++) //skip => temp akan dipush sesuai isinya nanti
//t.push([1,temp,1]) => [1,[],1] => [1,...temp,1] => [1,1] dapat tinggi nomor 2

//isi t = [[1],[1,1]]

//for i = 1; 2 < 3;i++ //
//for(j=1;1 <= 1 , j++)
//loop di dalam array t[1] => [1,1]. t[1][1] => index kedua
//t[1][j-1] + t[1][j] => t[1][0] + t[1][1] => 1+1 = 2
// temp.push(t[i][j-1] + t[i][j]) // [2]

//temp = [2]
//t.push([1,...temp,1]) => [1,...[2],1] => [1,2,1]
//t = [[1],[1,1],[1,2,1]]

//for i = 1; 3 < 4;i++ //
//for(j=1;j <= 2 , j++)

//[1,2,1]]
//t[2][j-1] + t[2][j] => t[2][0] + t[2][1] = 1 +2 = 3
//temp.push(3)// [3]

//for(j=1;2 <= 2 , j++)
//t[2][j-1] + t[2][j] => t[2][0] + t[2][1] = 1 +2 = 3
//t[2][j-1] + t[2][j] => t[2][1] + t[2][2] = 2 + 1 = 3
//temp.push(3) // [3,3]

//t.push([1,...temp,1]) => [1,...[3,3],1] => [1,3,3,1]

// 1            1 = fixed
// 1 1          2 = fixed ?  2-1 =1 loop untuk n 3
// 1 2 1        3 = 1, ????? , 1 3-1 = 2 loop untuk n 4
// 1 3 3 1      4 = 1, ????? , 1 4-1 = 3 loop untuk n 5
// 1 4 6 4 1    5 = 1, ????? , 1

// n = 3
// depan pasti 1
// belakang pasti 1
// akan masukan 1,1 di akhir

// harus bisa ngeget value sebelum indexnya atau sebelum n yang dicari

//2
// 1+2+1 = 4 bukan 3. cara tidak valid
// arr[i]
// i = 3 = [1,????,1]
// i = 2 = [ 1,1]

//semakin besar nilai n. maka ???? akan lebih dari 1
//panjang array 2. if 2-1 = 1 ? .4 ?length sebelum ada 3 . 3 - 1 =2 ?
// function a(cb) {
//  return cb;
// }
// const b = () => {
//  console.log('function b');
//  return 'b';
// };
// const c = () => 1;

// console.log();
