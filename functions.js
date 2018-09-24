// Function.arguments is deprecated and should not be used
// Now the simple variable arguments should be used within the function

// Function.arity is deprecated / obsolete and should not be used either
// This property used to return the number of arguments expected by the function
// .arity has been replaced by Function.prototype.length property

// Function.caller is a non-standard and should not be used in production web apps
// The expectation is that this method would return the function that invoked the specified function

// Function.displayName is a non-standard and should not be used in production web apps
// The expectation is that this method should return the display name of the function
// display name is a property on the function that can be assigned

// Function.length
// This property of functions returns the number of arguments expected by the function

function noArgs() {
  console.log("none");
}
function args2(a, b) {
  console.log(a, b);
}
function restArgs(...rest) {
  console.log(rest);
}
console.log(noArgs.length); // 0
console.log(args2.length); // 2
console.log(restArgs.length); // 0, rest parameter is not counted

// Function.length is an ES 1st Edition specification and is available on all browsers

// Function.prototype.name
// This property returns the name of the function or "anonymous" if it's an anonymous function
// This property is read only and can not be changed

var someFunc = function() {
  console.log("someFunc");
};
console.log(someFunc.name); // someFunc
function anotherFunc() {
  console.log("anotherFunc");
}
console.log(anotherFunc.name); // anotherFunc

// bound functions will have a name of "bound funcname"
// get and set accessor properties on objects will have a name of "get funcname", "set funcname"

// .name is not commonly used
// .name is an ES6 specification and is not supported in IE

// Function.prototype
// Methods and properties can be added onto the Function prototype object
// These methods/properties will be available to all functions created

Function.prototype.hasBeenCalled = false;

function toCall() {
  toCall.hasBeenCalled = true;
}

console.log(toCall.hasBeenCalled);
toCall();
console.log(toCall.hasBeenCalled);

function dontCall() {
  dontCall.hasBeenCalled = true;
}

console.log(dontCall.hasBeenCalled);
dontCall();
console.log(dontCall.hasBeenCalled);

// Adding properties to native objects is considered bad practice and should not be done
// It is preferred that you create your own object with these properties

// Function.prototype.apply()
// This method calls the function allowing the use of a given 'this' value within the function
// .apply(thisArg, [arg1, arg2, ...])
// thisArg is the 'this' value to be used within the function
// [arg1, arg2, ...] is an array of the arguments to pass to the function
// normal call to function is myFunc(arg1, arg2, ...)

var myThis = {
  name: "bob"
};

function applyThis(x, y) {
  console.log(this.name);
  console.log(x + y);
}

applyThis.apply(myThis, [1, 2]); // console.logs: bob -> 3
applyThis(1, 2); // console.logs: (empty output) -> 3

var findMaxArr = [1, 2, 3, 4, 5];
// var max = Math.max(findMaxArr); // Doesn't work, returns NaN because .max does not accept array
var max = Math.max.apply(null, findMaxArr); // returns 5 as arguments is expected to be an array
console.log(max); // 5

// Can also use spread operator instead
var otherMax = Math.max(...findMaxArr);
console.log(otherMax); // 5

// Can also be used with methods like Array.prototype.push
var newEls = [6, 7];
findMaxArr.push.apply(findMaxArr, newEls); // findMaxArr = [1, 2, 3, 4, 5, 6, 7]
console.log(findMaxArr);

// Can also use spread operator in this case
findMaxArr.push(...newEls); // findMaxArr = [1, 2, 3, 4, 5, 6, 7, 6, 7]

// Can be used to chain constructors

// .apply is an ES 3rd Edition specification and is available in all modern browsers
