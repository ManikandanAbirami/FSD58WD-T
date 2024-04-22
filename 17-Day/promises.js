// let promiseObj = new Promise((resolve, reject) => {
//   //Producer code
// });

// Example code to instantiate promise
let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting user name from DB...");
  setTimeout(() => {
    resolve("Manikandan");
    // reject("Error retreiving the data!!");
  }, 3000);
});

promiseObj.then(
  (val) => {
    //success callback
    console.log("Name received form DB:", val);
  },
  (err) => {
    //failure call back
    console.log("error occurred: ", err);
  }
);
