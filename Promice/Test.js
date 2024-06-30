function getUsers() {
  return [
    { username: "john", email: "john@test.com" },
    { username: "jane", email: "jane@test.com" },
    { username: "sohan", email: "sohan@gmail.com" },
  ];
}

function findUser(username) {
  const users = getUsers();
  const user = users.find((u) => u.username === username);
  return user;
}

console.log(findUser("sohan"));
// -----------------------------------------------------------

// function getUsers() {
//      let users = [];
//      setTimeout(() => {
//           users = [
//                { username: "sohan", email: "sohan@gmail.com" },
//                { username: "mohan", email: "mohan@gmail.com" },
//                { username: "Ashush", email: "Ashush@gmail.com" },
//           ]
//      }, 1000);
//      return users;
// }
// function findUser(username) {
//      const users = getUsers();
//      const user = users.find((user) => user.username === username);
//      return user;
// }
// console.log(findUser("sohan"));
// --------------------------------------------

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "sohan", email: "sohan@gmail.com" },
//       { username: "mohan", email: "mohan@gmail.com" },
//       { username: "Ashush", email: "Ashush@gmail.com" },
//     ]);
//   }, 1000);
// }
// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     callback(user);
//   });
// }
// findUser("sohan", console.log);
// -------------------------------------------------
