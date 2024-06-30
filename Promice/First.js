let first = new Promise((resolve, reject) => {
  // console.log("I am promise");
  if (10 % 2 != 0) {
    resolve("This is even");
  } else {
    reject("This is odd");
  }
});

first
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
