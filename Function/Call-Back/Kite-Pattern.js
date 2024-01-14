const prompt = require("prompt-sync")({ sigint: true });
function fun(pattern) {
     pattern(prompt("Enter Number of Row = "));
}
fun((row) => {
     let x = 0;
     let y = 1;
     for (let i = 1; i <= (row << 1); i++) {
          let temp = "";
          for (let j = 1; j < (row << 1); j++) {
               if (((i < 6) && (j >= (row - i + 1) && j <= (row + x))) || ((i >= row + 1) && (j > y && j < (row << 1) - y))) {
                    temp += "* ";
               } else {

                    temp += "  ";
               }
          }
          x = (i > row ? --x : ++x);
          y = (i > row ? ++y : 1);
          console.log(temp);
     }
});