var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person2" };

function areObjectsEqual(obj1, obj2) {
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(areObjectsEqual(obj1, obj2));

var xhr = new XMLHttpRequest(); // create object

xhr.open("GET", "./resume.json", true); // open url

// load response
xhr.onload = function () {
  //   console.log("XMLHttpRequest - status", xhr.status);
  var countries = JSON.parse(xhr.responseText);
  console.log(countries);

  //   countries.forEach((country) => {
  //     console.log(country.name.common + ": " + country.flag);
  //   });

  for (var i = 0; i < countries.length; i++) {
    console.log(countries[i].name.common + ": " + countries[i].flag);
    console.log("Populations: ", countries[i].population);
  }
};

xhr.send(); // send
