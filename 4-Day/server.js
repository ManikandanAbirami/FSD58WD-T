function addTwoNumbers(a, b) {
  // function declaration & definition - parameters
  var c = a + b;
  console.log("Inside function:", c);
  return c;
}

var result = addTwoNumbers(10, 125); // function call - Arguments(actual value)
console.log(result);

function applyDiscount(discount) {
  var cartAmount = 1000;
  cartAmount -= discount;
  console.log(cartAmount);
}

applyDiscount(500);

var assignName = function () {
  return "Manikandan Anbalagan";
};

console.log(assignName());

(function (a, b) {
  console.log("This is from IIFE", a + b);
})(10, 40);

// (function anonymous)(arguments);

function print(firstName, lastName) {
  return firstName + lastName;
}

var name = print("Manikandan", "Anbalagan");
console.log(name);

var print1 = (firstName, lastName) => {
  return firstName + lastName;
};

// var varName = () => {} Arrow function
// () (); IIFE
// function(){} Anonymous function

var name1 = print1("Guvi", "MERN");
console.log(name1);

var firstName = (firstName) => {
  console.log("Arrow funciton 1st name: ", firstName);
};

firstName("Manikandan");
