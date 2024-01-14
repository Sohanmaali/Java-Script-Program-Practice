const prompt = require("prompt-sync")({ sigint: true });
function fun(params) {
     params(prompt("Enter any num = "));
}
fun((num) => {
     const temp = num;
     let rev = 0;
     while (num > 0) {
          rev = parseInt(rev * 10) + parseInt(num % 10);
          num = parseInt(num / 10);
          console.log(rev);
     }
     if (rev == temp) {
          console.log("Palindrome number");
     } else {

          console.log(`Not a Palindrome number ${rev}`);
     }
});