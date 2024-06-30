// function myfun1() {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                console.log("Data1");
//                resolve("Success")
//           }, 4000);
//      });
// }
// function myfun2() {
//      return new Promise((resolve, reject) => {
//           setTimeout(() => {
//                console.log("Data2");
//                resolve("Success");
//           }, 6000);

//      });
// }
// console.log("Fatching data1");
// myfun1().then((resolve) => {
//      console.log("Fatching data 2 ");
//      myfun2().then((resolve) => { });
// })
// ===================Chain =====================
function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data = ", data);
      resolve("Success");
    }, 2000);
  });
}
getData(1)
  .then((resolve) => {
    return getData(2);
  })
  .then((resolve) => {
    return getData(3);
  })
  .then((resolve) => {
    console.log(resolve);
  });
