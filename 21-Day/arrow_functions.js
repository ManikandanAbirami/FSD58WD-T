function testArrowFunctions() {
  const numbers = [1, 2, 3, 4, 5];
  // map
  // filter
  // reduce
  const squareNumbers = numbers.map((number) => number * number);
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  const sumNumbers = numbers.reduce((total, number) => total + number);
  document.getElementById("arrowOutput").innerHTML = `
    <strong>Original Numbers:</strong> ${numbers.join(", ")}<br>
    <strong>Squared Numbers(map):</strong> ${squareNumbers.join(", ")}<br>
    <strong>Even Numbers(filter):</strong> ${evenNumbers.join(", ")}<br>
    <strong>Sum Numbers(reduce):</strong> ${sumNumbers}<br>
  `;
}
