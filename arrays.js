//exercises for arrays
//exercise 1
let array1 = [1, 2, undefined, 4]; //length 4

let array2 = [1];
array2.length = 5; //length 5

let array3 = [];
array3[-1] = [1]; //length 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;//length 3

let array5 = [];
array5[100] = 3;//length 101

//exercise 2
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];
for (let i = 0; i < myArray.length; i += 1){
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}

//exercise 3
let theArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
for (let i = 0; i < theArray.length; i += 1){
  for (let j = 0; j < theArray[i].length; j += 1){

    if (myArray[i][j] % 2 === 0) {
      console.log(myArray[i][j]);
    }

  }

}

//exercise 4
let myArrayTwo = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
let newEvenOdd = myArrayTwo.map(num => (num % 2 === 0) ? 'even': 'odd');

//exercise 5
function findIntegers(arr) {
  return arr.filter(num => Number.isInteger(num));

}

//exercise 6
function oddLengths(arr) {
  let tempArr = arr.map(val => val.length) 
  return tempArr.filter(valTemp => !(valTemp % 2 === 0));
}

//exercise 7
function sumOfSquares(arr) {
  return arr.reduce((accumulator, element) => accumulator + (element * element), 0);
}

//exercise 8
function oddLengthsTwo(arr) {
  return arr.reduce(function(accumulator, element) { 
    if (element.length % 2 === 1) {
       accumulator.push(element.length);
    } 
    return accumulator;
  },[]);
}

//exercise 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

//exercise 10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
arr[1][3] = 606;