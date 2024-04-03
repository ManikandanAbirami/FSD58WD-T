let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// [50, 100, 150]
// let result = [];
// for (let i = 0; i < a.length; i++) {
//   result.push(a[i] * 5);
// }
// console.log(result);

let mapResult = a.map((ele) => {
  return ele * 5;
});

let filterResult = a.filter((item) => {
  return item > 15;
});

console.log(mapResult);
console.log(filterResult);

// arr.map((item) => {})
// arr.filter((item) => {})

let reduceResult = a.reduce((sum, currentValue) => {
  console.log("sum: ", sum, " currentValue: ", currentValue);
  return sum + currentValue;
});

console.log(reduceResult);

var input = [
  23, 45, 678, 90, 33, 21, 780, 670, 498, 58940, 6565, 900, 370, 1299, 1300,
];

// item % 10 = 0;

const people = [
  { name: "Mani", age: 21 },
  { name: "Jack", age: 20 },
  { name: "John", age: 20 },
];

// Reducer function to group people by age

const groupedByAge = people.reduce((acc, item) => {
  // Use age as the key for the group
  const age = item.age;

  if (!acc[age]) {
    acc[age] = [];
  }

  //push the person into the appropriate age group
  acc[age].push(item);
  return acc;
});

console.log(groupedByAge);
