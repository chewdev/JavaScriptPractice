// Object.prototype.constructor
// This property returns the Object constructor function that created the object instance
// It returns the function itself

function Person(name) {
  this.name = name;
  this.isAlive = true;
  return this;
}

var bill = new Person("Bill");
var billConstruct = bill.constructor;
console.log(billConstruct === Person); // true

var o = {};
console.log(o.constructor === Object); // true

var oc = new Object();
console.log(o.constructor === Object); // true

var a = [];
console.log(a.constructor === Array); // true
// same for new Array

var n = new Number(3);
console.log(n.constructor === Number); // true

function Parent() {}
Parent.prototype.parentMethod = function parentMethod() {};

// We can assign a constructor to an object
function Child() {}
Child.prototype = Object.create(Parent.prototype); // re-define child prototype to Parent prototype

Child.prototype.constructor = Child; // return original constructor to Child

// .constructor is an ES 1st Edition specification and is available in all browsers

// Object.assign()
// This method is used to copy the values of all enumerable own properties from one or more objects into a target object.
// The altered target object is returned

var objectToAssign = {
  bob: "1st",
  joe: "2nd",
  john: "3rd"
};

// Object.assign(target, ...sources)
var assignedObject = Object.assign(
  { jill: "4th", jack: "5th" },
  objectToAssign
);
console.log(assignedObject);
console.log(objectToAssign);

// copy object (won't be a pointer to the reference object and can be changed without changing the source object)
var copyObjectToAssign = Object.assign({}, objectToAssign);
console.log(copyObjectToAssign); // {bob: '1st', joe: '2nd', john: '3rd'}
copyObjectToAssign.billy = "4th";
console.log(copyObjectToAssign); // {bob: '1st', joe: '2nd', john: '3rd', billy: '4th'}
console.log(objectToAssign); // {bob: '1st', joe: '2nd', john: '3rd'}

var refObjectToAssign = objectToAssign; // points to reference of object, will mutate original objectToAssign if changed
console.log(refObjectToAssign); // {bob: '1st', joe: '2nd', john: '3rd'}
refObjectToAssign.will = "4th";
console.log(refObjectToAssign); // {bob: '1st', joe: '2nd', john: '3rd', will: '4th'}
console.log(objectToAssign); // {bob: '1st', joe: '2nd', john: '3rd', will: '4th'} this was also mutated

// This does not perform a deep clone of objects
// It will not return a reference to the top level object, but objects within that object will return a reference
// If a deep clone that will not mutate any values in the original object is needed, we can use:
var notMutatingObj = JSON.parse(JSON.stringify(objectToAssign));

// .assign is an ES6 specification and is not currently supported in IE, Android, and Opera Android
// A polyfill is available on MDN if needed
