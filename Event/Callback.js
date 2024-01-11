function f1(callback) {
     console.log("I am f1 function.....");
     callback(5, 2);
}

// const callback = ()=>{
// }

function f2() {
     console.log("I am f2 function.....");
}

f1((a, b) => {
     console.log("I am callback function...");
});
// f2();