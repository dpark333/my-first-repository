let rlSync = require('readline-sync'); //exercise 1 for input and ouput 
let whatName = rlSync.question('What is your name? \n');
console.log(`Hello, ${whatName}!`);

let whatFirst = rlSync.question('What is your first name? \n'); //exercise 2
let whatLast = rlSync.question('What is your last name? \n');
console.log(`Hello, ${whatFirst} ${whatLast}!`);

let whatAge = rlSync.question('How old are you? \n');//exercise 3
console.log(`You are ${whatAge} years old.`);
console.log('In 10 years, you will be ' + (whatAge + 10) + ' years old.');
console.log('In 20 years, you will be ' + (whatAge + 20) + ' years old.');
console.log('In 30 years, you will be ' + (whatAge + 30) + ' years old.');
console.log('In 40 years, you will be ' + (whatAge + 40) + ' years old.');