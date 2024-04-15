// Coordinate display
document.querySelector("h1").addEventListener("click", function (event) {
  document.querySelector("#coordinateSpan").textContent =
    "X: " + event.clientX + ", Y: " + event.clientY;
});

// Text Color Change on Mouse Over

document.querySelector("#element").addEventListener("mouseover", function () {
  this.style.color = "gold";
  this.style.backgroundColor = "black";
});

document.querySelector("#element").addEventListener("mouseout", function () {
  this.style.color = "black";
  this.style.backgroundColor = "lightgrey";
});

// Prompt and Display
function displayText() {
  var userInput = prompt("Enter some text:");
  document.querySelector("#displaySpan").textContent = userInput;
}

// Character count
document.querySelector("#myTextarea").addEventListener("input", function () {
  var charCount = this.value.length;
  document.querySelector("#charCountDisplay").textContent =
    "Character count: " + charCount;
});

// Form validation

document.querySelector("#myForm").addEventListener("submit", function (event) {
  var inputField = document.querySelector("#inputField").value;
  if (inputField == "") {
    alert("Input cannot be empty!");
    event.preventDefault();
  }
});

// Fullscreen control
document
  .querySelector("#enterFullScreen")
  .addEventListener("click", function () {
    document.documentElement.requestFullscreen();
  });

document
  .querySelector("#exitFullScreen")
  .addEventListener("click", function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  });

// Editable content
document
  .querySelector("#editableContent")
  .addEventListener("mouseover", function () {
    this.contentEditable = true;
    this.focus();
  });

document
  .querySelector("#editableContent")
  .addEventListener("mouseout", function () {
    this.contentEditable = false;
  });

// Key alert
document.addEventListener("keydown", function (event) {
  //   if (event.key === " ") {
  //     alert("Thank You..!!");
  //     window.close();
  //   } else {
  //     alert("Invalid Key Pressed");
  //   }
});

function convertAndDisplay() {
  var number = parseInt(document.getElementById("numberInput").value);
  var type = document.getElementById("conversionType").value;
  var result = "";
  if (type === "binary") {
    result = number.toString(2);
  } else if (type === "hexadecimal") {
    result = number.toString(16).toUpperCase();
  }
  document.getElementById("conversionResult").textContent = "Result: " + result;
}
