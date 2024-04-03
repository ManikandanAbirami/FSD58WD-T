function createEmployeeReports(employees) {
  // Initalize an empty array to hold the reports
  const reports = [];

  // Iterate over the employees array using a for loop
  for (let i = 0; i < employees.length; i++) {
    //Destructure the name, department, and email from each employee object
    const { name, department, email } = employees[i];

    //Create the result string for the current employee
    // const report = `Name: ${name}, Department: ${department}, Email: ${email}`;
    const report =
      "Name: " + name + ", Department: " + department + ", Email: " + email;

    // Add the report string to the reports array
    reports.push(report);
  }

  //return the array of report strings
  return reports;
}

const employees = [
  {
    name: "employee1",
    age: 28,
    department: "Sales",
    email: "employee1@gmail.com",
  },
  {
    name: "employee2",
    age: 31,
    department: "Development",
    email: "employee2@gmail.com",
  },
  {
    name: "employee3",
    age: 22,
    department: "Management",
    email: "employee3@gmail.com",
  },
  {
    name: "employee4",
    age: 33,
    department: "Sales",
    email: "employee4@gmail.com",
  },
];

console.log(createEmployeeReports(employees));
// Write a function 'createEmployeeReports(employees)' that takes the 'employees' array as input and return an array of strings.
// "Name: [name], Department: [department], Email: [email]"

//o/p:
/**[
 * "Name: employee1, Department: Sales, Email: employee1@gmail.com",
 * "Name: employee2, Department: Sales, Email: employee1@gmail.com",
 * "Name: employee3, Department: Sales, Email: employee1@gmail.com",
 * "Name: employee4, Department: Sales, Email: employee1@gmail.com",] */
