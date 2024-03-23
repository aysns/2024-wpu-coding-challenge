//WPU CODING CHALLENGE 2024
//DAY 22/366
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

/*

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

*/

// function removeExclamationMarks(s) {
//  let result = '';
//  for(let a=0;a<s.length;a++){
//   if(s[a] !== '!'){
//     result+=s[a];
//   }
//  }
//  return result;
// }

const removeExclamationMarks = (s) => s.split('!').join('');

console.log(removeExclamationMarks("Hello World!"));