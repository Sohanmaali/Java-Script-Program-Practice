// const f1 = ()=>{
//      console.log("Inside f1");
//      setTimeout(() => {
//           console.log("Inside set timeOut");
//      }, 3000);
// }

// const f2 = ()=>{
//      console.log("I am f2");
// }

// f1();
// f2();

// const f1 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("Inside f1");
//     setTimeout(() => {
//       console.log("Inside set timeOut");
//       resolve();
//     }, 3000);
//   });
// };

// const f2 = () => {
//   console.log("I am f2");
// };

// f1()
//   .then(() => {
//     console.log("I am then block");
//   })
//   .catch(() => {
//     console.log("I am catch block");
//   });
// f2();

function f1() {
  console.log("i am f1");
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("i am settimeout");
      res("i am res");
    }, 3000);
  });
}
function f2() {
  console.log("i am f2");
}

f1()
  .then((rej) => {
    console.log(rej);
  })
  .then((res) => {
    console.log("res");
  })
  .catch((rej) => {
    console.log(rej);
  });

f2();
