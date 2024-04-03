const numbers = [1, 2, 3];
// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
const [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

const num = [1, 2, 3, 4, 5];
const [first, , , fourth, fifth] = num;
console.log("first", first);
console.log("fourth", fourth);
console.log("fifth", fifth);

const numbersNew = [1, 2, 3, 4, 5];
console.log("numbersNew:", ...numbersNew);
const [one, two, ...others] = numbersNew;
console.log("one", one);
console.log("two", two);
console.log("others", others);
//one: 1
//two: 2
//others: [3,4,5]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log("Spread:", ...arr1);

const person = {
  name: "Manikandan Anbalgan",
  age: 33,
};

const { age: yourAge, name: yourName } = person;
// var name = person.name;
// var age = person.age;

console.log("Name:", yourName);
console.log("Age:", yourAge);
