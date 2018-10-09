function sumAll(arr) {
  let t1 = performance.now();
  const [min, max] = arr.sort((a, b) => a > b);
  const sum = (max - min + 1) * ((max + min) / 2);
  let t2 = performance.now();
  var min2 = Math.min.apply(null, arr);
  var max2 = Math.max.apply(null, arr);
  var sum2 = 0;
  for (var i = min2; i <= max2; i++) {
    sum2 += i;
  }
  let t3 = performance.now();
  console.log("first", sum, t2 - t1); // This is constant time and takes the same time even as min/max difference (n) becomes large
  console.log("second", sum2, t3 - t2); // This is O(n) time and the time increases much more as n becomes large
  return sum;
}

sumAll([100, 200000000]);
