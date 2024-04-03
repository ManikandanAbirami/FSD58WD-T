let firstName = "Manikandan";
let lastName = "Anbalagan";
let age = 33;
let city = "Chennai";

console.log(
  "My name is " +
    firstName +
    " " +
    lastName +
    "." +
    " I currently live in " +
    city +
    ", and my age is " +
    age +
    "."
);

console.log(
  `My name is ${firstName} ${lastName}. I currently live in ${city}, and my age is ${age}.`
); // Template Literals `${}`

let obj1 = { name: "Mani", age: 33 };
let obj2 = { role: "TL", company: "google" };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
