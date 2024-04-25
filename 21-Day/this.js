document
  .getElementById("traditionalBtn")
  .addEventListener("click", function () {
    // 'this' refers to the button element
    document.getElementById("traditionalOutput").innerText =
      "'this' is Traditional Function: " + this;
  });

document.getElementById("arrowBtn").addEventListener("click", () => {
  // 'this' refers to the window because of lexical scoping, which is the global scope
  document.getElementById("thisArrowOutput").innerText =
    "'this' is Arrow Function: " + this;
});
