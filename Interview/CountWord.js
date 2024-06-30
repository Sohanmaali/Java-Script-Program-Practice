function usingCollection(arr) {
  const map = {};

  arr.forEach((s) => {
    if (map[s]) {
      map[s] += 1;
    } else {
      map[s] = 1;
    }
  });
  console.log(map);
  //   Object.entries(map).forEach(([key, value]) => {
  //     console.log(`${key} \t\t ${value}`);
  //   });
}

// Example usage
const str = "i am a java developer from indore and i learn java";
const arr = str.split(" ");
usingCollection(arr);
