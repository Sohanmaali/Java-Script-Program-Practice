const a = ()=>{
     console.log("i am real function");
     return ()=>{
          console.log("I am return function...");
     }
}


const b = a();
console.log(b());


// function f1(){

// }

// console.log(f1());