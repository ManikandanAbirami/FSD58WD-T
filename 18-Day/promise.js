// defining the promise object with the producer code
let promiseObj = new Promise((resolve, reject) => {
  //Produce code
  console.log("Getting the name from DataBase.");
  setTimeout(() => {
    reject("No Data!!!");
    resolve("Manikandan Anbalagan");
  }, 2000);
});

//consumer code
promiseObj.then(
  (val) => {
    console.log(`Name received form DataBase = ${val}.`);
  },
  (err) => {
    console.log(`Error occured = ${err}!!!!`);
  }
);
