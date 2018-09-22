// Array.length
var myArr = [
  1,
  2,
  3,
  "bob",
  null,
  true,
  { concsistOf: "anything" },
  ["other", "nested", "array"],
  false,
  0
];

var length = myArr.length; // 8
console.log("length", length);

// Array.prototype - We can add new methods onto the array prototype
Array.prototype.toBool = function() {
  var newArr = [];
  this.forEach(item => {
    newArr.push(!!item);
  });
  return newArr;
};

var boolArr = myArr.toBool();
console.log(boolArr);

var fromArr = Array.from("john"); // ['j', 'o', 'h', 'n']
// We can pass a map function as second argument, called on every element as in the .map method
var fromArr2 = Array.from([1, 5, 10], x => x * x); // [1, 25, 100]
var fromArr3 = Array.from({ 1: "bob", 2: "john", 3: "sally" }); // []
var fromArr4 = Array.from("first", x => x + "-"); // ['f-', 'i-', 'r-', 's-', 't-']

function Person(lastname) {
  this.lastname = lastname;
  return this;
}

var johnson = new Person("Johnson");

// We can optionally pass a 3rd argument.
// That argument will be the 'this' for the map function to reference
var fromArr5 = Array.from(
  ["bob", "jane", "joe"],
  function(x) {
    return x + " " + this.lastname;
  },
  johnson
); // ['bob Johnson', 'jane Johnson', 'joe Johnson']
var fromArr6 = Array.from({ length: 5 }); // [undefined, undefined, undefined, undefined, undefined]
var fromArr7 = Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

console.log(
  fromArr,
  fromArr2,
  fromArr3,
  fromArr4,
  fromArr5,
  fromArr6,
  fromArr7
);

// Array.from polyfill is available on MDN as it is an ES6 specification

// Array.isArray() - check if the passed parameter is an Array
// returns true if value is an Array, false otherwise
// Array.isArray is prefered over instanceof for checking instance of an Array
// Array.isArray works through iframes, however instanceof does not

var isArr1 = Array.isArray([]); // true
var isArrArr = [1, 2, 3, "bob", null, undefined, ["is", "array"]];
var isArr2 = Array.isArray(isArrArr); // true

var isArr3 = isArrArr.map(val => Array.isArray(val)); // [false, false, false, false, false, false, false, true]

console.log(isArr1, isArr2, isArr3);

// Array.isArray polyfill if needed (initial specification in ECMAScript 5.1)
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
