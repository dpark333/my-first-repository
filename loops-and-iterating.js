//exercises for loops and iterating
//exercise 1
let rlSync = require('readline-sync');
let whatAge = rlSync.question('How old are you? \n');
for (let age = 10; age <= 40; age += 10) {
  console.log(`In ${age} years you will be ${whatAge + age} years old`);
}

//exercise 2
/*function factorial(numTemp) {
  let finalAnswer = 1;
  for (let times = numTemp; times > 0; times -= 1) {
    finalAnswer *= times; 
  }
  return finalAnswer;

} */

//exercise 3
//this is an infinite loop because the counter is set to be 1 in the condition of the while loop
/*let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
} */

//exercise 4 prints 1 2 3 4 5
for (let i = 0; i < 5;) {
  console.log(i += 1);
}

//exercises 5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;


do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

//exercise 6

function factorial(numTemp) {
  
  if (numTemp === 1) {
    return numTemp;
  }
  return numTemp * factorial(numTemp - 1);
  

}