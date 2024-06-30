var str = [];
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    str.push("FizzBuzz");
  } else if (i % 5 == 0) {
    str.push("Buzz");
  } else if (i % 3 == 0) {
    str.push("Fizz");
  } else {
    str.push(i);
  }
}
console.log(str);
