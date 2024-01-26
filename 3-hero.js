//WPU CODING CHALLENGE 2024
//DAY 3/366
//https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
/*

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

*/

//CARA 1

// function hero(bullets, dragons){
//   if(bullets/2 >= dragons){
//     return true;
//   }else{
//     return false;
//   }
// }

//CARA 2

// function hero(bullets, dragons){
//   return(bullets/2 >= dragons) ? true : false;
// }

//CARA 3
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
