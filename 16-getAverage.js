//WPU CODING CHALLENGE 2024
//DAY 16/366
//https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

/*

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

// function getAverage(marks){
//   let result = 0;
//   for(let a=0; a<marks.length; a++){
//     result += marks[a];
//   }
//   let average = Math.floor(result / marks.length);
//   return average;
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc,curr)=>(acc+curr))/marks.length);

console.log(getAverage([1,2,3,4,5]))