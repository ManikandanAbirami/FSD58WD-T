// function to test var
function testVar() {
  var x = 52;
  if (true) {
    var x = 65;
    document.getElementById("output").innerText = "Inside if-block: " + x;
  }
  document.getElementById("output").innerText += " | Outside if-block: " + x;
}

// function to test let
function testLet() {
  let y = 32;
  if (true) {
    let y = 75;
    document.getElementById("output").innerText = "Inside if-block: " + y;
  }
  document.getElementById("output").innerText += " | Outside if-block: " + y;
}

//function to test const
function testConst() {
  const z = 32;
  document.getElementById("output").innerText = "Const Z: " + z;
  try {
    z = 76;
  } catch (error) {
    document.getElementById("output").innerText += " | Error: " + error;
  }
}
