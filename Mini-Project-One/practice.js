//Roll No /Admission no, Registration no,
// const employees = [
//   { id: 1, name: "RAM", age: 27, designation: "Developer" },
//   { id: 2, name: "SITA", age: 28, designation: "Tester" },
//   { id: 3, name: "JACK", age: 29, designation: "UI/UX" },
//   { id: 4, name: "RAM", age: 27, designation: "Devops" },
//   { id: 5, name: "RAM", age: 27, designation: "Devops" },
//   { id: 6, name: "JOHN", age: 31, designation: "Developer" },
//   { id: 7, name: "JACK", age: 29, designation: "Tester" },
//   { id: 8, name: "JEN", age: 29, designation: "Devops" },
// ];

// console.log(employees.filter((emp) => emp.id != 4));

const employees = [
  { name: "RAM", age: 27, designation: "Developer" }, //0
  { name: "SITA", age: 28, designation: "Tester" }, //1
  { name: "JACK", age: 29, designation: "UI/UX" }, //2
];

function display() {
  try {
    console.log("Before", employees);
    let name = "JILL";
    let age = 33;
    employee[3] = { ...employees[2], name, age };
    console.log("After", employees);
  } catch (error) {
    console.log("Hey! from catch block", error);
  }
}

display();
