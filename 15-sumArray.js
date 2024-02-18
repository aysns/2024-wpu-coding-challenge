//WPU CODING CHALLENGE 2024
//DAY 14/366
//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

/*

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

// function sumArray(array) {
//   let max = Math.max(...array)
//   let min = Math.min(...array);
//   let result = 0;
//   for(let a=0; a<array.length; a++){
//     if(array[a]!=max && array[a]!=min){
//       result+=array[a]
//     }
//   }
//   return result;
// }

const sumArray = (array) => 
  array == null || array.length <=2 
  ? 0
  : array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,curr)=>acc+curr);

console.log(sumArray([ 0, 1, 6, 10, 10 ]))