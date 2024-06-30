const m1 = (n) => {
  if (n == 0) return;
  console.log(n);
  m1(n - 1);
};

m1(10);
