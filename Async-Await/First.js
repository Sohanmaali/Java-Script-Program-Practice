function api(value) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               console.log(value);
               resolve(value);
          }, 2000);
     });
}
(async function () {
     await api(100);
     await api(200);
})();// IIFI CALL
// getApi();