//WPU CODING CHALLENGE 2024
//DAY 1/366
//CARA 1

// function grow(x){
//   let result = x[0];
//   for(let i=1; i<x.length;i++){
//     result*=x[i];
//   }
//   return result;
// }
// console.log(grow([1,2,3,4]));

//CARA 2
function grow(x){
  const result = x.reduce((acc,curr) => acc*curr, 1);
  return result;
}
console.log(grow([1,2,3,4]));

/* 
-fungsi reduce mengembalikan nilai baru
-makanya pake const
-yang atas pake let, karna nilai variabelnya akan diisi ulang
-panggil array nya yaitu x
-dan panggil fungsi reduce 
-fungsi reduce menerima 2 nilai
-yaitu accumulator, yaitu nilai hasil
-dan current value, maksudnya adalah nilai saat array ditelusuri
-misal nilai awalnya adalah 1, dan 1 mau kita kalikan, dengan apa kita kalikannya
-dengan nilai awal yaitu 1

-kita punya nilai awal yaitu 1
-1 masuk sebagai accumulator
-1 dikali cuurent value yaitu 1 sama dengan 1
-1 masuk sebagai accumulator
-1 dikali current value yaitu 2 sama dengan 2
-2 masuk sebagai accumulator
-DST...............
*/