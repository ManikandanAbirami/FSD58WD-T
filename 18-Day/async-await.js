const getName = async () => {
  try {
    let name = await namePromise;
    console.log(`Name received from DB = ${name}`);
  } catch (err) {
    console.log("Error occurred:", err);
  }
};

let namePromise = new Promise((resolve, reject) => {
  console.log("Getting name from DB....");
  setTimeout(() => {
    // resolve("Manikandan Anbalagan");
    reject("No data!!");
  }, 1000);
});

getName();

// promiseObj.then(() => {success}, () => {err})
