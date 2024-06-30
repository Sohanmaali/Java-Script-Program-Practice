// Example usage
//rightAngledTriangle
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

//rightAngledTriangle
console.log(
  "\n===============================================================\n"
);
for (let i = 5; i >= 1; i--) {
  console.log("*".repeat(i));
}

console.log(
  "\n===============================================================\n"
);

for (let i = 1; i <= 5; i++) {
  const space = " ".repeat(5 - i);
  const star = "*".repeat(i * 2 - 1);
  console.log(space + star);
}
