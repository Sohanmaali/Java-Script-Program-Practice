
// Made By Sohan
var row = 5;
for (var i = 1; i <= row; i++) {
  let x = "";
  for (var j = 1; j <= row; j++) {
    if (j >= row - i + 1) {
      x += "* ";
    }
    else {

      x += "--";
    }
  }
  console.log(x);
}

