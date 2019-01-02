// Write a function where the input is a string and the output is the number of occurences of each character in the string.

console.log(countChars("aaaa")); // {a: 4}
console.log(countChars("")); // should this return an empty object?
console.log(countChars("hello")); // {h: 1, e: 1, l: 2, o: 1}
console.log(countChars("my phone number is 3443434")); // should spaces be counted? should numbers?
console.log(countChars("I'm in line, I'll call you back.")); // should punctuation be counted? should we separate lowercase and uppercase letters?

// We decided to only count alphanumeric characters and uppercase letters are to be counted as part of the lowercase letter count
function countChars(str) {
  // store counts in an object, with key of character and value of count of that char
  // first initialize this object as an empty object
  var charMap = {};
  // loop over string (str) input and for each character, check if it is alphanumeric
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      // if it is alphanumeric, make sure it is lowercase, else change it to lowercase
      char = char.toLowerCase();
      // increment value if character is on object, else add character to object and set value to 1
      charMap[char] = ++charMap[char] || 1;
    }
    // if not alphanumeric, ignore the character
  }
  // return object with counts
  return charMap;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
