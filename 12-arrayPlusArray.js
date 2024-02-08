//WPU CODING CHALLENGE 2024
//DAY 12/366
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

/*

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

*/

// function arrayPlusArray(arr1, arr2) {
//   let join = arr1.concat(arr2);
//   let result = 0;
//   for(let a=0; a<join.length; a++){
//     result += join[a];
//   }
//   return result;
// }

const arrayPlusArray = (arr1,arr2) => (arr1.concat(arr2)).reduce((acc,cur)=>acc+cur,0);

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));