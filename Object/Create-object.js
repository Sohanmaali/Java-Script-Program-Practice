const obj = {
     name: 'Sohan',
     email: 'sohan@gmail',
     innerobj: {
          name: 'Mohan',
          email: 'mohan@gmail.com'
     }
}
// console.log(obj.innerobj.name);
const obj1 = {
     a: 1,
     b: 2
}
const obj2 = {
     a: 1,
     b: 2
}
const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj);
// console.log(obj3);
const obj4 = { ...obj1, ...obj2 }

// console.log(obj4);
// console.log(obj3 == obj4);
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
console.log("");