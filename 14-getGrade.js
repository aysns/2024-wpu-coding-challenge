//WPU CODING CHALLENGE 2024
//DAY 14/366
//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

/*

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

// function getGrade (s1, s2, s3) {
//   let average = (s1 + s2 + s3)/3
//   if(average <=100 && average >= 90){
//     return 'A';
//   } else if(average <90 && average >= 80){
//     return 'B';
//   } else if(average <80 && average >= 70){
//     return 'C';
//   } else if(average <70 && average >= 60){
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

function getGrade (...s) {
  const average = s.reduce((acc,curr)=>acc+curr)/s.length;
  if(average <=100 && average >= 90){
    return 'A';
  } else if(average <90 && average >= 80){
    return 'B';
  } else if(average <80 && average >= 70){
    return 'C';
  } else if(average <70 && average >= 60){
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95,90,93));