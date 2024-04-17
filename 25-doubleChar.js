//WPU CODING CHALLENGE 2024
//DAY 25/366
//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

/*

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/

// function doubleChar(str) {
//   let result = '';
//   for(let a=0;a<str.length;a++){
//     result = result+str[a]+str[a];
//   }
//   return result;
// }

const doubleChar = (str) => str.split('').map((el)=>el+el).join('');

console.log(doubleChar("abcd")); 
