//WPU CODING CHALLENGE 2024
//DAY 11/366
//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

/*

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

// const rps = (p1, p2) => {
//   if(p1 == p2){
//     return 'draw';
//   }else if((p1=='scissors' && p2=='paper')||(p1=='paper' && p2=='rock')||(p1=='rock' && p2=='scissors')){
//     return 'Player 1 won!';
//   }else{
//     return 'Player 2 won!'
//   }
// };

// const rps =(p1,p2)=>{
//   const rules = {
//     rock: 'scissors',
//     scissors: 'paper',
//     paper: 'rock',
//   };
  
//   if(p1 === p2){
//     return 'Draw!';
//   } else{
//     return `Player ${rules[p1]===p2 ? '1' : '2'} won!`
//   }

// }

const rps =(p1,p2)=>{
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock',
  };
  
  return p1 === p2 ? 'Draw!' : `Player ${rules[p1]===p2 ? '1' : '2'} won!`;

}

console.log(rps('paper','rock'));

/*

p1 adalah paper
paper di rules pasangannya rock

p2 adalah rock
berarti paper = rock return 1

*/