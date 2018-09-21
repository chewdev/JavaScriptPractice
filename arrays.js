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
