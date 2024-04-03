// var age = 17;

// if (age >= 18) {
//   console.log("You are eligible to vote.");
// } else {
//   console.log("You are not eligible to vote.");
// }

//Categorize vehicle speed
// < 30 : SLOW
// <= 80: AVERAGE
// >80: FAST

// var speed = 45;
// if(){

// } else if() {

// } else {

// }

// var num = 10;

// num % 2 === 0 ? console.log("EVEN") : console.log("ODD");
// var a = 10;
// console.log(a++);

var x = 9;
// Single digit positive number
// More than one-digit positive number

if (x === 0) {
  console.log("Niether positive nor negative");
} else if (x > 0) {
  if (x < 10) {
    console.log("One Digit Positive Number");
  } else {
    console.log("More than One DigitPositive Number");
  }
} else {
  console.log("Negative Number");
}

var category = "women";

switch (category) {
  case "men":
    console.log("Showing Men's apparels!");
    break;
  case "women":
    console.log("Showing Women's apparels!");
    break;
  default:
    console.log("Showing All apparels!");
}

var signal = "GREEN"; //GO
// var signal = "RED" //STOP
// var signal = "YELLOW" //WAIT
// var signal = "something else" //INVALID SIGNAL

var num = 1234;

var sum = 0,
  n = num;

console.log(parseInt(20.4));
console.log(Math.floor(20.75));

var num = 345671;

var sum = 0,
  n = num;

while (n > 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
