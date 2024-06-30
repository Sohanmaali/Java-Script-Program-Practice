let n = 372;

const length = (n) => {
  let c = 0;
  while (n != 0) {
    n = Math.floor(n / 10);
    c++;
  }
  return c;
};
const armstrong = (n) => {
  let temp = n;
  let number = 0;
  const c = length(n);
  while (n != 0) {
    let digit = n % 10;
    number += Math.pow(digit, c);
    n = Math.floor(n / 10);
  }
  if (number == temp) {
    console.log(`${temp} is Armstrog`);
  } else console.log(`${temp} is not Armstrog`);
};

armstrong(n);
