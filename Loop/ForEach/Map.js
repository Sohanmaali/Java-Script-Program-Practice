const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const b = a.map((item) => item + 1);

const b = a
  .map((item) => item + 1)
  .map((item) => item * 10)
  .filter((item) => item >= 100);
console.log(b);
