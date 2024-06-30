// const pro = new Promise((resolve, reject) => {
//      console.log("promice call");
//      setTimeout(() => {
//           console.log("setTime out");
//           // resolve("Resolve");
//           reject("Error");

//      }, 4000);
// });

// pro.then((resolve) => {
//      console.log("resolve");
// }).catch((error) => {
//      console.log(error);
// });

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

// function getUsers() {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                resolve([
//                     { username: 'john', email: 'john@test.com' },
//                     { username: 'jane', email: 'jane@test.com' },
//                ]);
//           }, 1000);
//      });
// }

// function onFulfilled(users) {
//      console.log(users);
// }

// const promise = getUsers();
// promise.then(onFulfilled);
// ==============================================

function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data geted " + data);
      resolve(data);
      // reject("reject");
    }, 2000);
  });
}
let p = getData(2);

p.then((res) => {
  console.log(res);
  return getData(3);
})
  .then((res) => {
    console.log(res);
  })
  .then((res) => {
    console.log("Success");
  })
  .catch((rej) => {
    console.log(rej);
  });
// ============================================

function job(data) {
  return new Promise((res, rej) => {
    if (data % 2 == 0) {
      setTimeout(() => {
        res("even");
      }, 2000);
    } else if (data % 2 != 0) {
      setTimeout(() => {
        res("odd");
      }, 1000);
    } else {
      rej("error");
    }
  });
}
