// Declare a variable to hold the reference to the opened window
var myWindow;
var statusIntervalId;

// Function to open a new window
function openNewWindow() {
  var url = document.getElementById("urlInput").value;
  if (url) {
    // Check if the URL field is not empty
    myWindow = window.open(url, "_blank");
    setTimeout(function () {
      if (myWindow) {
        myWindow.close();
        myWindow = null; // Reset the variable after closing the window
      } else {
        // alert("No window is currently open!!");
        appendAlert("No window is currently open!!", "success");
      }
    }, 100000);
  } else {
    // alert("Please enter a URL!!");
    appendAlert("Please enter a URL!!", "success");
  }
}

// Function to close the window
function closeWindow() {
  if (myWindow) {
    myWindow.close();
    myWindow = null; // Reset the variable after closing the window
    clearInterval(statusIntervalId); // Stop checking once the window is closed
  } else {
    // alert("No window is currently open!!");
    appendAlert("No window is currently open!!", "success");
  }
}

// Function to check if the window is open

function checkWindowStatus() {
  if (myWindow && !myWindow.closed) {
    // alert("the window is still open.");
    appendAlert("The window is still open.", "success");
  } else {
    // alert("The window is closed or was never opened!");
    appendAlert("The window is closed or was never opened!", "success");
  }
}

// Function to ontinuouly check the window status every 5 seconds

function startStatusCheck() {
  statusIntervalId = setInterval(function () {
    if (myWindow && !myWindow.closed) {
      // alert("the window is still open.");
      appendAlert("Checked: The window is still open.", "success");
    } else {
      // alert("The window is closed or was never opened!");
      appendAlert(
        "Checked: The window is closed or was never opened!",
        "success"
      );
      clearInterval(statusIntervalId); // Stop checking once the window is closed
    }
  }, 5000); // setInterval( function, timing)
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
