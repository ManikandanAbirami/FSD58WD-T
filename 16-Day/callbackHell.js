const getContinents = (callback) => {
  // callback - getCountries();
  setTimeout(() => {
    // code to get all the continents
    let continent = "Asia";
    console.log(continent);
    callback(continent);
  }, 1000);
};

const getCountries = (callback) => {
  //callback - getStates();
  setTimeout(() => {
    // code to get all the countries
    let country = "India";
    console.log(country);
    callback(country);
  }, 1000);
};

const getStates = (callback) => {
  //callback - getCities();
  setTimeout(() => {
    // code to get all the states
    let state = "TN";
    console.log(state);
    callback(state);
  }, 1000);
};

const getCities = (callback) => {
  //callback - done();
  setTimeout(() => {
    // code to get all the cities
    let city = "CH";
    console.log(city);
    callback();
  }, 1000);
};

const done = () => {
  console.log("Done!!!");
};

const getAddress = () => {
  getContinents((continent) => {
    getCountries((country) => {
      getStates((state) => {
        getCities(() => {
          done();
        });
      });
    });
  });
};

getAddress();
