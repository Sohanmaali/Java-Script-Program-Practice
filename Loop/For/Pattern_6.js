
// Made By Sohan
var row = 5;
for (var i = 1; i <= row; i++) {
  let x = "";
  for (var j = 1; j <= i; j++) {
    if ((i + j) % 2 != 0) {
      x += 0 + " ";
    } else {
      // document.write("1 ");
      x += 1 + " ";
    }
  }
  console.log(x);
}
