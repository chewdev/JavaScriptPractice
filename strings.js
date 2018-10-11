var str1 = "this is a string"; // string literal
var str2 = `this is another string`; // template literal
var name = "Bob";
var str3 = `Hello ${name}`; // template literals can be used to concatenate the result of expressions within a string
var num = 2;
var str4 = `My favorite number is ${num + 5}`; // My favorite number is 7
console.log(str3);
console.log(str4);

// String() can be used to create a string from anything passed to it
var numStr = String(num);
console.log(numStr); // "2"

/* We can use escape notation to accomplish many string manipulations such as adding a new line (\n), carriage return (\r), tab (\t), backspace (\b), form feed (\f). It can also be used to escape certain characters that would otherwise not be interpreted correctly, such as: within single quotes we must escape single quotes used in the string (\'), within double quotes we must do the same (\") and since backslash is the universal escape character, we must escape it for it to be interpreted as a backslash (\\).*/

var escapedStr =
  '\tBob said, "It\'s always great seeing you!"\n\t"Likewise!", she replied.';
console.log(escapedStr);

var longStr =
  "Long strings can be written " +
  "like this, so that it is readable" +
  "within the text editor.";

var longStr2 =
  "They may also be written \
like this. The lines must end \
with a single \\ in order for it to work \
and no other character may come after.";

console.log(longStr);
console.log(longStr2);

// This returns the 3rd character in longStr2 (index 2) which is the 'e' in 'They'
console.log(longStr2.charAt(2)); // e

// As of ES5 this can also be accomplished as follows:
console.log(longStr2[2]); // e

// We can compare strings using ==, ===, !=, !==, >, >=, <, <=
console.log("a" > "b"); // false
console.log("a" < "b"); // true
console.log("a" == "b"); // false
