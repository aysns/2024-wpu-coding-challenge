//WPU CODING CHALLENGE 2024
//DAY 6/366
//https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

/*

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/

// function DNAtoRNA(dna) {
//   let rna ='';
//   for(i=0;i<dna.length;i++){
//     if(dna[i] === 'T'){
//       rna = rna + 'U'
//     }else{
//       rna = rna + dna[i] ;
//     }
//   }
//   return rna;
// }

// console.log(DNAtoRNA("GCAT"));

// function DNAtoRNA(dna) {
//   return dna
//   .split('')
//   .map((el) => (el === 'T' ? 'U' : el))
//   .join('');
// }

// console.log(DNAtoRNA("TTTT"));

/*
 
-split artinya diubah jadi array
-lalu kita petakan setiap elemen pada array

*/

// const DNAtoRNA = (dna) => dna.replace(/T/g,'U');

const DNAtoRNA = (dna) => dna.replaceAll('T','U');
console.log(DNAtoRNA("TTTT"));