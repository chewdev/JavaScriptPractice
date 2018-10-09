function pushN(n) {
  var arr = [];
  for (var i = 0; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
function unshiftN(n) {
  var arr = [];
  for (var i = 0; i <= n; i++) {
    arr.unshift(i);
  }
}
var N = 20000;
var t1 = performance.now();
pushN(N);
var t2 = performance.now();
unshiftN(N);
var t3 = performance.now();

console.log("push ", t2 - t1, "time difference"); // t2 - t1 is about 2 to 2.5
console.log("unshift ", t3 - t2, "time difference"); // t3 - t2 is about 55 to 56

// push is a much faster array method than unshift due to array indexing
// when pushing an element onto an array, no other elements change index
// when unshifting an element onto an array, ALL other elements change index
// this causes unshift to be very costly as N becomes large
