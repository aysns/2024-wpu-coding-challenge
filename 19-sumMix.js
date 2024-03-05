//WPU CODING CHALLENGE 2024
//DAY 19/366
//https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

/*

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

// function sumMix(x){
//   let result = 0;
//   for(let a=0; a<x.length; a++){
//     result+=Number(x[a]);
//   }
//   return result;
// }

const sumMix = (x) => x.reduce((acc,curr)=> acc+ +curr,0);

console.log(sumMix([9, 3, '7', '3']));

//  +curr -> sebuah fungsi mengubah string jadi angka