const getStates = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let state = "TamilNadu";
      console.log(state);
      // resolve(state); //callback();
      reject("Error occured in getStates!!!");
    }, 1000);
  });
};

const getCities = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let city = "Chennai";
      console.log(city);
      resolve(city); //callback();
    }, 1000);
  });
};

const done = () => {
  console.log("DONE!");
};

// const getAddress = () => {
//   getStates(() => {
//     getCities(() => {
//       done();
//     });
//   });
// };

const getAddress = () => {
  getStates()
    .then(
      (state) => {
        // console.log("Get cities", getCities());
        return getCities();
      },
      (err) => {
        console.log(err);
      }
    )
    .then(() => {
      return done();
    });
};

getAddress();
