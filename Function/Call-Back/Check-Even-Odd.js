// const prompt = require("prompt-sync")();
const prompt = require('prompt-sync')({ sigint: true });

function fun(callback) {
     const a = prompt("Enter a num = ");
     callback(a);
}
fun((a) => {
     if (a % 2 === 0) {
          console.log("Even Number");
     } else {

          console.log("Odd Number");
     }
});
