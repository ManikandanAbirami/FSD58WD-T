const getUserName = (userName, callback) => {
  setTimeout(() => {
    console.log("We have a user name to display!!!");
    callback(userName);
  }, 2000);
};

const getUserAge = (userName, age, callback) => {
  setTimeout(() => {
    console.log("We have a user's age to display!!!");
    callback(userName + " " + age);
  }, 2000);
};

const getUserDesignation = (userName, age, callback) => {
  setTimeout(() => {
    console.log("We have a user's designation to display!!!");
    callback(userName + " " + age + " " + "Project Manager!");
  }, 2000);
};

// getUserAge("", (test) => {
//   console.log(test);
// });

const user = getUserName("Manikandan", (userName) => {
  console.log(userName);
  getUserAge(userName, 33, (userNameWithAge) => {
    console.log(userNameWithAge);
    getUserDesignation(userName, 33, (userNameWithAgeandDesignation) => {
      console.log(userNameWithAgeandDesignation);
    });
  });
});
