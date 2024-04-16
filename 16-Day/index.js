// function sum(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// function getResults(x, y, operation) {
//   return operation(x, y); // sum(10, 20)
// }

// console.log(getResults(10, 20, sum)); //30
// console.log(getResults(2, 5, multiply)); //10

let add = (callback) => {
  let x = 2,
    y = 3;
  console.log("Sum: ", x + y);
  callback();
};

// add(function () {
//     console.log("Finished this operation!!");
//   });

let subtract = (callback) => {
  let x = 2,
    y = 3;
  console.log("Difference: ", x - y);
  callback();
};

const displayCompletion = () => {
  console.log("Finished this operation!!");
};

add(displayCompletion);
subtract(displayCompletion);

// subtract(function () {
//   console.log("Finished this operation!!");
// });
