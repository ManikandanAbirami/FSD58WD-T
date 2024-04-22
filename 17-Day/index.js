//setInterval
//setTimeout

// const interval = setInterval(() => {
//   console.log("Hello from setInterval log!!!!");
// }, 1000);
// setTimeout(() => {
//   console.log("Hello from setTimeout log!!!!");
//   clearInterval(interval);
// }, 5000);

const functionOne = () => {
  console.log("Hey, this is FUNCTION ONE!!!"); //1

  functionTwo();

  console.log("Hey, this is FUNCTION ONE PART 2!!!"); //2
};

const functionTwo = () => {
  setTimeout(() => console.log("Hey, this is FUNCTION TWO!!!"), 0); //3
  //   console.log("Hey, this is FUNCTION TWO!!!");
};

functionOne();

// 1 1
// 2 3
// 3 2
