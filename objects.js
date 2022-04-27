//exercises for objects part of JS book
//exercise 1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};
let tempName = person.name;

//exercise 2
//all of them are valid keys they get coerced into strings

//exercise 3 

let myArray = {
  '0': 1,
  '1': 2,
  '2': 3,
  'length': 3,
};

//exercise 4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};
let objArray = Object.keys(obj);
let upperArray = objArray.map((key) => key.toUpperCase());

//exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

//exercise 7
myObj.qux = 3;
//the for in iterates over all things in the obj including the stuff from the prototype obj
//the for each from the object.keys only iterates over myobj own properties

//exercise 8 

function copyObj(objToCopy, arr) {
  let returnObj = {};
  if (arr) {
    arr.forEach(function(key) {
      returnObj[key] = objToCopy[key];
    });

    return returnObj;
  }

  else {
    return Object.assign(returnObj, objToCopy);
  }

}

//exercise 9
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);//hi
console.log(qux);//hello

//exercise 10
//[1, 2, ["a", ["b", false]], null, {}]
// 1, 2, a, b, false, null are primitive
//the array itself is an obj, the blank obj, the nested array and the array inside of the array are obj

//exercise 11
let tempObj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
tempObj.bar[3].xyz = 606;
