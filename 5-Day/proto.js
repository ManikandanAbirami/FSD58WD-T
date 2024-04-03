var shape = {
  is2D: true,
};

var circle = {
  radius: 3,
};

var rectangle = {
  length: 1,
  breadth: 2,
};

// using proto refer shape to circle
// answer

circle.__proto__ = shape;

console.log("Is circle a 2D shape?" + circle.is2D);
console.log("Radius of circle = " + circle.radius);

// using proto refer shape to rectangle
//answer

console.log("Is rectangle a 2D shape?" + rectangle.is2D);
console.log(
  "Length of rectanlge = " +
    rectangle.length +
    ", Breadth of rectanlge = " +
    rectangle.breadth
);
