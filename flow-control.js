//exercises for flow control
//exercise 1
false || (true && false); //false
true || (1 + 2);//true
(1 + 2) || true;//3
true && (1 + 2);//3
false && (1 + 2);//false
(1 + 2) && true;//true
(32 * 4) >= 129;//false
false !== !true;//false
true === 4;//false
false === (847 === '847');//true
false === (847 == '847');//false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;//true

//exercise 2
function evenOrOdd(tempNum) {
  if (!Number.isInteger(tempNum)) {//exercise 3
    return console.log('This is not an integer, please enter an integer.');
  }

    if (tempNum % 2 === 0) {
      return console.log('even');
    }
    else {
      return console.log('odd');
    }

}

//exercise 4
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); //logs 3 switch cases to console starting from the case 113

//exercise 5
if (foo()) {
  //return 'bar';
}
else {
  //return qux();
}

//exercise 6
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);//logs Not Empty to console

//exercise 7 

function allCaps(tempInput) {
  if (tempInput.length > 10) {
    return tempInput.toUpperCase();

  }
  else {
    return tempInput;
  }

}

//exercise 8

function numRange(tempNum) {
  if (tempNum >= 0  && tempNum <= 50) {
    console.log(`${tempNum} is between 0 and 50`);
  }
  else if (tempNum >= 51 && tempNum <= 100) {
    console.log(`${tempNum} is between 51 and 100`);

  }
  else if (tempNum > 100) {
    console.log(`${tempNum} is greater than 100`);
  }
  else {
    console.log(`${tempNum} is less than 0`);
  }

}