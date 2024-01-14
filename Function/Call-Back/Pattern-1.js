// sohan
// *
// * *
// * * *
// * * * *
// * * * * *
const prompt = require("prompt-sync")({ sigint: true });
function fun(pattern) {
     pattern(prompt("Enter number of row = ") * 1);
}
fun((row) => {
     for (let i = 0; i < row; i++) {
          let temp = "";
          for (let j = 0; j <= i; j++) {
               temp += "* ";
          }
          console.log(temp);

     }
});