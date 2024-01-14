const pro = new Promise((resolve, reject) => {
     console.log("promice call");
     setTimeout(() => {
          console.log("setTime out");
          // resolve("Resolve");
          reject("Error");

     }, 4000);
});


pro.then((resolve) => {
     console.log("resolve");
}).catch((error) => {
     console.log(error);
});

// const pro = new Promise((resolve, reject) => {
//      console.log("i am promice");
//      setTimeout(() => {
//           console.log("i am set time out");
//      }, 3000);
//      resolve("i am resolve");
//      reject("i am rejected");
// });
// pro.then((resolve) => {
//      console.log(resolve);
// }).catch((reject) => {
//      console.log(reject);
// });