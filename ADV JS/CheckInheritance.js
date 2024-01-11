class Demo {

     m1(a,b) {
          console.log("I am first m1" ,a,b);
     }

     // m1(a) {
     //      console.log("I am second m1" ,a);
     // }

     constructor(){
          console.log("i am parent constructor...");
     }

}

class Child extends Demo{

     m1(a,b) {
          console.log("I am child m1" ,a,b);
     }

     constructor(){
          console.log("I am child constructor....");
          super();
     }
}


const obj = new Demo();
obj.m1();