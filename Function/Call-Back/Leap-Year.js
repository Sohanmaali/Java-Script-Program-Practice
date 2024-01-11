const prompt = require('prompt-sync')({ sigin: true });
function fun(callback) {
     callback(prompt("Enter Any Year = "));

}
fun((year) => {
     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
          console.log("Enter Year is Leap Year");
     } else {

          console.log("Enter Year is Normal Year");
     }
})