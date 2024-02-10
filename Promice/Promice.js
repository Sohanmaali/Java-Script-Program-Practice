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


function getUsers() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' },
               ]);
          }, 1000);
     });
}

function onFulfilled(users) {
     console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);