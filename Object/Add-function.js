const obj = {
     name: "SOHAN",
     roll: "100"
};
// console.log(obj);
obj.myFun = function myFun() {
     console.log("i am my fun");
}
obj.myFun2 = function myFun2() {
     console.log(`i am ${this.name}`);
     console.log(`i am ${this["roll"]}`);
}

obj.myFun();
obj.myFun2();
