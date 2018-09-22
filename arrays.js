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

// Array.of() creates a new Array instance with the arguments that are passed in
var ofArr = Array.of(7); // [7]
var ofArr2 = Array.of(undefined, true, false, "blue", 8); // [undefined, true, false, 'blue', 8]
var notOfArr = Array(7); //[, , , , , ,] --- 7 empty elements in array
var notOfArr2 = Array(1, 2, 3); // [1, 2, 3]

console.log(ofArr, ofArr2, notOfArr, notOfArr2);

// Array.of() allows passing a single integer value as the only element in the array
// When passing a single integer value to Array(), an array with a length equal to the integer is created. All elements of the array will be empty

// Array.of() is not supported in IE
// Polyfill
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}

// Array.prototype.concat() - Array method that merges multiple arrays
// Does not alter values passed to it or the array that it is called upon
// Returns a new array
// Nested arrays are not spread into new array and are instead kept as a single array element within the new array
// Arrays and objects within the arrays being concatenated are passed by reference
// Changing the array or object element within the original array will also change it within the concatenated array

var concatToArr = [1, 2, 3];
var concatWithArr = [4, 5, 6];
var concatedArr = concatToArr.concat(concatWithArr, [7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(concatedArr);

// Array.prototype.copyWithin()
// Shallow copies a part the array to another location within the array
// arr.copyWithin(target, start, end)
// target is the index at which you wish you begin replacing elements
// start is the index at which you wish to begin copying elements
// end is the index at which you wish to stop copying elements (non-inclusive)

var arrCopyWithin = [1, 2, 3, ["arr", { obj: "bob" }, 3], "what"];

arrCopyWithin.copyWithin(2, 3, 5); // [1, 2, ['arr', {obj: 'bob'}, 3], 'what', 'what']

console.log(arrCopyWithin);

arrCopyWithin.copyWithin(2, 1, 2); // [1, 2, 2, 'what', 'what']

console.log(arrCopyWithin);

// The start value (2nd arg) is 0 by default
// The end value (3rd arg) is arr.length by default
// Not specifying start or end results in copying from beginning of the array to the end
// The amount of items copied is dependent upon the target index and number of elements in the array
arrCopyWithin.copyWithin(1); // [1, 1, 2, 2, 'what']

console.log(arrCopyWithin);
