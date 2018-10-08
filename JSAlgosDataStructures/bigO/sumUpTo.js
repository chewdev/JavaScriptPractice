function sumUpTo(n) {
  // var total = 0;
  // for (var i = 1; i <= n; i++) {
  //   total += i;
  // }
  // return total; // Above implementation is O(n)
  return (n * (n + 1)) / 2; // this is O(1)
}
