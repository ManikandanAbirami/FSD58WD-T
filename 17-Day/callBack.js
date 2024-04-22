const getUserName = (userName, callback) => {
  setTimeout(() => {
    callback({ user: userName });
  }, 2000);
};

const user = getUserName("Guvi", (user) => {
  console.log(user);
});

//undefined

//callback

function operation(a, b) {
  // Parameters
  return (a = b);
}

operation(1, 2); //Arguments = Actual value
