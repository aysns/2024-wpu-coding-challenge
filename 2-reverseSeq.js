//WPU CODING CHALLENGE 2024
//DAY 2/366


// const reverseSeq = n => {
//   const result = [];
//   for (let i=n; i>0; i--){
//     result.push(i);
//   }
//   return result;
// };

//ATAU

// function reverse(n){
//   const result = [];
//   for (let i=n; n>0; n--){
//     result.push(n);
//   }
//   return result;
// }

// console.log(reverseSeq(5));

//ATAU

// const reverseSeq = (n) => [...Array(n)].map((el,i)=>i+1).reverse();
// console.log(reverseSeq(5));

const reverseSeq = (n) => [...Array(n)].map((el,i)=>n-i);
console.log(reverseSeq(5));

/*

-function untuk membuat array -> Array(n)
-artinya bikin sebuah array dengan jumlah elemennya n
-[...Array(n)] -> ini di spread oprator makanya nilai di dalam array akan undefined
-map() -> fungsi di js untuk memetakan setiap elemen pada array menggunakan fungsi tertentu
-map(el) => 1 -> semua elemen nya bernilai 1
-parameter map bisa 1 bisa 2, yang pertama ada elemennya yang kedua ada indexnya
-map(el,i)

-buat array kosong dengan jumlah elemen nya n
-lalu petakan isinya pakek map


*/

