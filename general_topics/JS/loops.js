// You start with 5 crayons
// var crayonsLeft = 5;

// while (crayonsLeft > 0) {
//   console.log("I m coloring a picture!");
//   crayonsLeft = crayonsLeft - 1; // After coloring, you have one less crayon.
// }

// console.log("Oh no, I'm out of crayons! I can't color anymore.");

// var orderNumbers = [101, 102, 103, 104, 105];
// console.log(orderNumbers.length);

// for (var i = 0; i < orderNumbers.length; i++) {
//   console.log("Processing order number: ", orderNumbers[i]);
// }

// var orderProcessed = 0;
// var noMoreOrders = false; //flag

// while (!noMoreOrders) {
//   console.log("Processing order number: ", orderProcessed + 1);
//   orderProcessed++;

//   if (orderProcessed === 100) {
//     noMoreOrders = true;
//   }
// }
var cart = ["Bag", "Shoes", "Jeans", "Shirts"];
console.log(cart);

cart[4] = "Belts";
console.log(cart);

cart.unshift("Watches");
console.log(cart);

cart.shift();
console.log(cart);
