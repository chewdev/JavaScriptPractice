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
