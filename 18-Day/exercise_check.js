function checkPositive(number) {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(`The number ${number} is positive.`);
    } else {
      reject(`Error: The number ${number} is not positive.`);
    }
  });
}

checkPositive(50)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

checkPositive(-50).then(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log(err);
  }
);
