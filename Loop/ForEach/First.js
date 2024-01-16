const a = ["a", "b", "c", "d"];
// a.forEach((value) => {
//      console.log(value);
// });

// a.forEach(useMe)
// function useMe(params) {
//      console.log(params);
// }


// a.forEach((item, index, array) => {
//      console.log(item, index, array);
// });

const obj = [
     { language: "javaScript", sort: "js" },
     { language: "java", sort: "j" },
     { language: "Pyhton", sort: "py" }
];
obj.forEach((item) => {
     console.log(`Language name : ${item.language}  sort name ${item.sort}`);
});