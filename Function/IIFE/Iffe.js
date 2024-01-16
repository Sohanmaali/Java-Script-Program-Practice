(function JS() {
     // Named IIFE
     console.log("first IIFE");
})();

((name) => {
     // Anonymous IIFW
     console.log(`hy i am second iffe with ${name}`);
})("sohan");
