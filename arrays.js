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

// Array.prototype.entries()
// Returns a new Array Iterator with key/value pairs
// key is the index in the array and value is the elements value
// We can step through an iterator using the .next method
// The .next method returns the next item of the iterator as an object
// The object contains a key of 'done' which will be true when all elements have been iterated through
// While there are still elements, 'done' will be false
// The other key in the object is 'value' which contains the array of key/values: i.e. [0, 'bob'] --- The 0th element of the array was 'bob'

var myIterArr = [1, 2, 3];
var myIteratorObj = myIterArr.entries(); // create new Array Iterator
var next = myIteratorObj.next(); // grab the next element of the iterator
var done = next.done; // check if next was the final element (next.done === true)

// While final element hasn't been reached, continue
while (!done) {
  console.log(next); // log current element
  next = myIteratorObj.next(); // grab next element
  done = next.done; // check if done, exit loop when done
}

// {value: [0, 1], done: false} - {value: [1, 2], done: false} - {value: [2, 3], done: false}

// Array.prototype.entries is an ES6 specification and requires polyfill for older browsers, including IE

// Array.prototype.every()
// This method takes a function as its argument and an optional 'this' parameter as second argument
// This function is called on each element of the array and will return true or false based on some condition
// The callback is passed the elements value, it's index and the original array as args
// If every element returns true, .every returns true, otherwise it returns false

var integerArr = [1, 2, 5, 7, 22, 33];
function isInt(num) {
  return typeof num === "number" && num % 1 === 0;
}

var areIntegers = integerArr.every(isInt);
console.log(areIntegers); // true

var notOnlyIntArr = [1, 2.3, 5, 7, 22, 33];
var areIntegers2 = notOnlyIntArr.every(isInt);
console.log(areIntegers2); // false

// .every is compatible in all modern browsers, however a polyfill is available for those running on ECMAScript < 5.1

// Array.prototype.fill()
// This method fills an array with the specified value from a start position to end position
// arr.fill(value, start, end)
// value is the value you wish to set these elements equal to
// start is the beginning index from which to fill
// end is the last index to fill (non inclusive)

var arrToFill = ["a", "b", "c", { cat: "dog" }, [1, 2, 3]];

arrToFill.fill("value", 3, 5); // ['a', 'b', 'c', 'value', 'value']

console.log(arrToFill);

// start defaults to 0 if not provided, end defaults to arrToFill.length if not provided
arrToFill.fill("bob"); // ['bob', 'bob', 'bob', 'bob', 'bob']

console.log(arrToFill);

// .fill method is an ES6 specification and a polyfill is available on MDN if needed

// Array.prototype.filter()
// This method is used to filter out (remove) elements that do not pass a conditional test when passed to a provided callback
// This method loops over each element of the array and passes the element to the provided callback
// If the callback returns true, the element is included in the return array, otherwise it is removed

var arrToFilter = [1, 2, 50, 100, 200, 221, 33];

// Filter out all elements that are 55 or greater
var filteredArr1 = arrToFilter.filter(el => el < 55);
console.log(filteredArr1); // [1, 2, 50, 33]

// Filter out all elements that are not even
var filteredArr2 = arrToFilter.filter(el => el % 2 === 0);
console.log(filteredArr2); // [2, 50, 100, 200]

// Filter out all elements that are not greater than the previous element
// .filter passes 3 arguments to the callback: current element, current index, the entire array being filtered
var filteredArr3 = arrToFilter.filter(
  (el, ind, arr) => (ind === 0 ? true : el > arr[ind - 1])
);
console.log(filteredArr3); // [1, 2, 50, 100, 200, 221]

var arrToFilter2 = [
  {
    id: 1,
    userId: 55,
    note: "hi"
  },
  {
    id: 2,
    userId: 77,
    note: "bye"
  },
  {
    id: 3,
    userId: 55,
    note: "How are you?"
  },
  {
    id: 4,
    userId: 99,
    note: "I'm new here"
  }
];

// Filter array to only return notes written by user with userId = 55
var user55Notes = arrToFilter2.filter(obj => obj.userId === 55);
console.log(user55Notes);

// We can also pass an optional 'this' argument as the second argument to filter.
// The 'this' argument will be used when executing the callback
// The callback is the first argument

// Filter returns a new array. If no items pass the callback test, an empty array is returned

// Array.prototype.filter is supported by all major modern browsers
// A polyfill is available if support for ES < 5.1 is needed

// Array.prototype.find()
// This method accepts a callback and option 'this' argument for that callback as arguments
// It returns the first element of the array that returns true when passed to the callback
// The callback is provided the current element, it's index and the entire array

var arrToFind = [1, 2, 5, 9, 200, 150, 101];
var found = arrToFind.find(el => el > 100); // 200
console.log(found);

// .find method returns undefined when no element is found
var found2 = arrToFind.find(el => el === 7); // undefined
console.log(found2);

// Find the first element that is greater than the next element
var found3 = arrToFind.find(
  (el, ind, arr) => (ind !== arr.length - 1 ? el > arr[ind + 1] : false)
); // 200
console.log(found3);

// .find method is available in most major modern browsers except IE
// This method is an ES6 specification and a polyfill is available on MDN for older browsers

// Array.prototype.findIndex()
// This method accepts a callback and a 'this' argument to be used for the callback as its 2 arguments
// The current element, it's index and the entire array are passed to the callback
// This method returns the index of the first element that returns true from the callback

var arrToFindIndex = [1, 3, 2, 20, 30, 99, "bob", "john"];

// Find the index of the first element whose value is greater than 20
var foundIndex = arrToFindIndex.findIndex(el => el > 20); // 4
console.log(foundIndex);

// Find the index of the first element whose value is greater than the next element in the array
var foundIndex2 = arrToFindIndex.findIndex(
  (el, ind, arr) => (arr[ind + 1] ? el > arr[ind + 1] : false)
); // 1
console.log(foundIndex2);

// Find the index of the first element that is not a number
var foundIndex3 = arrToFindIndex.findIndex(
  el => !(typeof el === "number" && !isNaN(el))
); // 6
console.log(foundIndex3);

// .findIndex is an ES6 specification and is not supported by IE
// A polyfill is available on MDN for older browsers

// Array.prototype.flat()
// This method is only experimental right now
// It is not available on almost all browsers
// This method will flatten an array to the depth specified (.flat(depth))
// depth is defaulted to 1 if not specified

// var arrToFlat = [1, 2, [3, 4, [5, 6]]];
// var flattened1 = arrToFlat.flat(); // [1, 2, 3, 4, [5, 6]];
// var flattened2 = arrToFlat.flat(2); // [1, 2, 3, 4, 5, 6];

// console.log(flattened1, flattened2);

// It can also be used to remove empty slots in the array
// var arrToFlat2 = [1, 2, , 4, 5];
// var flattened3 = arrToFlat2.flat(); // [1, 2, 4, 5];
// console.log(flattened3);

// Array.prototype.flatMap()
// This method is experimental and has little to no support from browsers currently
// This method is essentially the same as a map followed by a flat of depth 1

// var arrToFlatMap = [[1, 2, 3], [4, 5, 6]];
// var flattenedMap = arrToFlatMap.flatMap(x => {
//   x.push(7);
//   return x;
// }); // [1, 2, 3, 7, 4, 5, 6, 7]
// console.log(flattenedMap);

// arr1.flatMap(x => [x * 2]);
// // is equivalent to
// arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// // [2, 4, 6, 8]

// flatMap should not be used currently as it is experiemental

// Array.prototype.forEach()
// This method maps over each element of an array, however it returns undefined
// This method does not return the array nor directly alter the existing array
// All persisting changes / modifications must be made upon external variables within the callback
// forEach(callback, thisArg) takes a callback and the 'this' argument for the callback
// The callback is called upon each element in the array
// The callback is passed the current element, current index and entire array as such:
// callback(el, ind, arr)

var forEachArr = ["bob", "joe", "jane"];

var peopleObj = {};
forEachArr.forEach((el, ind) => {
  peopleObj[ind] = el;
}); // returns undefined

console.log(peopleObj); // {0: 'bob', 1: 'joe', 2: 'jane'}

// forEachArr has not been modified and can be used in other forEach loops
forEachArr.forEach(el => console.log(el)); // 'bob', 'joe', 'jane'

// .forEach method is available in all major modern browsers
// A polyfill is available on MDN if support for ES < 5.1 is needed

// Array.prototype.includes()
// This method checks if the array includes a certain element
// It returns true if it does contain the element and false otherwise
// arr.includes(searchElement, fromIndex) takes the element you are searching for as 1st arg
// 2nd arg is option and is the index of the array from which you want to begin searching

var includesArr = [1, 2, 3, 4, 5, 6];
var isIncluded = includesArr.includes(2); // true
console.log(isIncluded);
var isIncluded2 = includesArr.includes(2, 3); // false (2 doesn't exist after the element in the array with an index of 3, it is at index 1);
console.log(isIncluded2);
var isIncluded3 = includesArr.includes(2, 1); // true
console.log(isIncluded3);

// .includes is an ES7 specification and is supported in most major modern browsers except IE
// If older browser support is required, a polyfill is available on MDN

// Array.prototype.indexOf()
// This method returns the first index at which an specific value can be found in an array
// It returns -1 if the value is not found within the array
// arr.indexOf(searchElement, fromIndex) takes the value we are searching for and an optional second argument of the index from which to begin searching

var indexOfArr = [1, 2, 3, 4, 5, 6, 1, 2, 1];
var indexOf1 = indexOfArr.indexOf(1); // 0
console.log(indexOf1);
var indexOf5 = indexOfArr.indexOf(5); // 4
console.log(indexOf5);

// Use indexOf to find the index of all instances of a value (1)
var indexesOf1 = [];
var start = indexOfArr.indexOf(1); // If it exists, find the index of the first instance of the searched element

// Exit out of while loop once index of the next instance is -1. This means there is not a next instance and all instances have been found
while (start !== -1) {
  // The next instance exists, push it's index value into the array of indices
  indexesOf1.push(start);
  // Search from the index after the current found index to see if more instances exist
  start = indexOfArr.indexOf(1, start + 1);
}

console.log(indexesOf1); //[0, 6, 8];

// .indexOf is an ES5 specification and is available in all major modern browsers
// It should be polyfilled if support for ES < 5.1 is necessary
// Polyfill can be found on MDN

// Array.prototype.join()
// This method joins the array elements (concatenates) into a single string and returns the string
// The method accepts a string as an argument and will separate each element of the array by this string
// undefined and null elements are converted to empty strings

var arrToJoin = ["the", "cow", "goes", "mooo"];
var joinedStr = arrToJoin.join(" "); // separate each element by a space in the new string
console.log(joinedStr);

// Create a comma separated list
var skillsArr = [
  "React",
  "Node",
  "Express",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "HTML",
  "CSS"
];
var skillsCS = skillsArr.join(", ");
console.log(skillsCS); // 'React, Node, Express, MongoDB, MySQL, JavaScript, HTML, CSS'

// .join is fully compatible in all browsers. Was included in 1st Edition of ES

// Array.prototype.keys()
// This method returns a new Array Iterator object that contains the keys of each index

var keysArr = ["bob", "john", "jane"];
var keysIt = keysArr.keys();
var nextKey = keysIt.next();
while (!nextKey.done) {
  console.log(nextKey.value);
  nextKey = keysIt.next();
} // 0, 1, 2

// .keys is an ES6 specification and is supported by all major modern browsers except IE
