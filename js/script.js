//console.log('Hello world');
//console.log('JS');
//Comment
/*function name() {
   console.log('Stady');
   console.log('JS');
}
name();*/
//оголошення без значення
//let myLifeStyle;
//присвоєння значення

//myLifeStyle = 'freelance';

//оголошенн зінною з присвоєнням значення
//let myLifeStyle = 'freelance';
// console.log(myLifeStyle) *//
//в одній стрічці
//let myName = 'Мучусь із джава скриптом', myAge = 31, myMassage = 'Fuck you';

// через кому з нового рядка
//let myName = 'Мучусь із джава скриптом',
  // myAge = 31,
  // myMassage = 'Fuck you';

   //окремо
//let myName = 'Мучусь із джава скриптом';
//let myAge = 31;
//let myMassage = 'Fuck you';
//console.log(myName, myAge, myMassage)
//"use strict"    //строгий режим
//function testBlock() {
  // console.log('study');
  // console.log('JS');
//}
//testBlock();
//let obj = { a: 1 }
//onsole.log(obj.b)//

/*var remainder = 48 % 11;
console.log(remainder);*/
/* let resultOne = 'my' + 'name is ' + 'Serhii';
console.log(resultOne);
console.log(typeof resultOne);
//цифровий +рядковий = рядковий, порядок значення не має
let bob = 'serhii ' + 56;
console.log(bob);
console.log(typeof bob);

let bib = 2 + "  2";
console.log(bib);
console.log(typeof bib);

console.log('558' > 47);
*/
/*if (0) {
   console.log("false");
} else if(" ") {
   console.log("trukbkhje");
};
*/
/*let num = 8;
while (num) {
   console.log(num);
   num--;
}*/

/*let nut = 0;
while (nut < 3) {
   console.log(`Number: ${nut}`);
   nut++;
}

for (let nim = 0; nim < 3; nim++) {
   console.log(`Number: ${nim}`)
}*/
/*
for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++){
      console.log(size)
      {
         if (size == 1) break;
      }
   }
}
*/
/*
function showMassage() {
   console.log('Massage');
}
showMassage();*/

/*function apple() {
   let numA, numB, numC, NumD;
   
   function getOne() {
      numA = 3;
   }
   function getTwo() {
      numB = 335;
   }
   function getThree() {
      numC = 44;
   }
   function getFour() {
      NumD = 18;
   }
   getOne();
   getTwo();
   getThree();
   getFour();
   let numSum = numA + numB + numC + numC;
   console.log(numSum);
}

apple();*/

/*unction calcSumm(numOne, numTwo) {
   let result = 1;
   for (let i = 0; i < numTwo; i++) {
      result *= numOne
   }
   return result;
}
console.log(calcSumm(2, 8)); */

function calcSumm(numOne, numTwo) {
   if (numTwo === 7) {
      return numOne;
   } else {
      return numOne * calcSumm(numOne, numTwo + 1)
   }
}
console.log(calcSumm(1 , 1));

let a = 244140625;
a = Math.sqrt(a);
console.log(a);

