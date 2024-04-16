console.log("Start of the Script!!!");

// setImmediate(() => {
//   console.log("Immediate callback");
// });

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

setTimeout(() => {
  console.log("Timeout callback - 2");
}, 0);

// process.nextTick(() => {
//   console.log("Next Tick Callback");
// });

console.log("End of script!!!");
