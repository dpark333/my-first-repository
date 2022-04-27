//exercises for morestuff section of js book
//exercise 1

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);// [1,4,3]

//exercise 2 
//error says the error occured on exercise2.js line 4 the error occured at the argument of console.log
//the error shows its a reference error because greeting was not defined

//exercise 3
Math.sqrt(37);

//exercise 4
Math.max(1, 6, 3, 2);
Math.max(-1, -6, -3, -2);
Math.max(2, 2);

//exercise 5
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}//returns an array of the lengths of the words in reverse

//exercise 6
function allMatches(words, phrase) {
  let returnArray = [];
  for (let tempVal of words) {
    if(phrase.test(tempVal)) {
      returnArray.push(tempVal);
    }

  }
  return returnArray;
}

//exercise 7
//exception handling is testing code for errors in a predicatable manner it helps find errors before they can occur

//exercise 8
function isNotNumber(num) {
  return num !== num;

}

//exericse 9 
function isNegZero(val) {
  if (3/val === Number.NEGATIVE_INFINITY) {
    return true;
  }

}

//exercise 10
//y++ returns 5