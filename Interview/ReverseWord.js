let word = "hy i am sohan";
let s = "";

// ====================================================
// let wordArray = word.split(/\s+/);

// for (let i = wordArray.length - 1; i >= 0; i--) {
//   for (let j = 0; j < wordArray[i].length; j++) {
//     s += wordArray[i].charAt(j);
//   }
//   if (i > 0) {
//     s += " ";
//   }
// }
// ==================================================
// let length = word.length;

// for (let i = length - 1; i >= 0; i--) {
//   if (word.charAt(i) === " " || i === 0) {
//     let start = i === 0 ? i : i + 1;
//     let end = length;
//     while (start < end) {
//       s += word.charAt(start);
//       start++;
//     }
//     length = i;
//     if (i > 0) {
//       s += " ";
//     }
//   }
// }

// ============================================

// let start = 0;
// for (let i = 0; i < word.length; i++) {
//   if (word.charAt(i) === " " || i == word.length - 1) {
//     let end = i == word.length - 1 ? i : i - 1;

//     while (end >= start) {
//       s += word.charAt(end);

//       end--;
//     }
//     start = i + 1;
//     if (i < word.length) s += " ";
//   }
// }
console.log(s);
