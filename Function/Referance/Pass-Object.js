function firstfun(myobj) {
     return `name is ${myobj.name} and age is ${myobj.age}`;
}
// obj = {
//      name: "sohan",
//      age: 22
// }
// console.log(firstfun(obj));
console.log(firstfun({
     name: "sohan",
     age: 22
}
));