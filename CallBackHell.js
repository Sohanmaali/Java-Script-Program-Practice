// function myfun(dataid, getnext) {
//      setTimeout(() => {
//           console.log("Data = ", dataid);
//           // if (getnext) {
//           getnext();
//           // }
//      }, 2000);
// }
// myfun(1, () => {
//      console.log("data2");
//      myfun(2, () => {
//           console.log("data3");
//           myfun(3, () => {
//                console.log("data4");

//           });
//      });
// });

// // ================================================
// function getData(data, callback) {
//      setTimeout(() => {
//           console.log("Data = " + data);
//           if (callback) {
//                callback();
//           }
//      }, 3000);
// }
// getData(2, () => {
//      getData(3, () => {
//           getData(4, () => {
//                getData(5, () => {
//                     getData(6);
//                });
//           });
//      });
// });
// ==========================================================
let arr = ["Sohan", "Maali", "Indore"];
let printName = () => {
  setTimeout(() => {
    print(arr[0]);
    setTimeout(() => {
      print(arr[1]);
      setTimeout(() => {
        print(arr[2]);
      }, 2000);
    }, 2000);
  }, 2000);
};
let print = (value) => {
  console.log(value);
};
printName();
