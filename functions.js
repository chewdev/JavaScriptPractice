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
