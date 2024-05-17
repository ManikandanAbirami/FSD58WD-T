let result = 0;

const operation = (a, b, c) => {
  result = a + b + c;
  document.getElementById("result").innerText = "Result: " + result;
  console.log("Result: ", result);
};
