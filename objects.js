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
