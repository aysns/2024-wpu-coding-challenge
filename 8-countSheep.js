//WPU CODING CHALLENGE 2024
//DAY 8/366
//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

/*

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

// var countSheep = function (num){
//   let hasil='';
//   let kata = " sheep..."
//   for(let a=1; a<=num; a++){
//       hasil += a + kata;
//   }
//   return hasil;
// }

const countSheep = (num) => [...Array(num)].map((_,i)=>`${i+1} sheep...`).join('');

console.log(countSheep(3));