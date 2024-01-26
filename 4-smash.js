//WPU CODING CHALLENGE 2024
//DAY 4/366
//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

/*

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

//VERSI BAR BAR

// function smash(words){
//   let result = '';
//   for(let i=0; i<words.length; i++){
//     result += words[i];
//     if(i != words.length-1){
//       result += ' ';
//     }
//   }
//   return result
// }

//VERSI SINGKAT

// function smash (words) {
//   return words.join(' '); //fungsi join menerima 1 parameter yaitu delimiter/pemisah
// };

const smash = (words) => words.join(' ');

console.log(smash(['hello', 'world', 'this', 'is', 'great']));