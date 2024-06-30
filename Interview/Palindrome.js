let n = 121;

const reverseNumber = (n) => {
  let rev = 0;
  while (n != 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
};

const checkPalindrome = (n) => {
  const reverse = reverseNumber(n);
  if (reverse === n) console.log("number is palindrome");
  else console.log("number is Not palindrome");
};
checkPalindrome(n);
