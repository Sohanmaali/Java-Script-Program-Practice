function usingCollection(arr) {
  const map = {};

  arr.forEach((s) => {
    if (map[s]) {
      map[s] += 1;
    } else map[s] = 1;
  });

  // for (const key of Object.keys(map)) {
  //   console.log(`${key}\t\t ${map[key]}`); //using for of
  // }

  for (const key in map) {
    console.log(`${key}\t\t ${map[key]}`); //using for in
  }
}

const str = "i am a java developer from indore and i learn java";
const arr = str.split(" ");
usingCollection(arr);
