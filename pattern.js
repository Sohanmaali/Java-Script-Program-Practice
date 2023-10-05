let n = 5;

function pattern(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("*");
    }
  }
}
pattern(n);
