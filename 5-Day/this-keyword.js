var a = 100;
var b = 200;
var operation = {
  a: 1,
  b: 2,
  add: function () {
    console.log(`METHOD: a = ${this.a}, b = ${this.b}.`);
    var print = () => {
      console.log(`Normal FUNCTION: a = ${this.a}, b = ${this.b}.`);
    }; // Regular function
    print();
  },
};

// Arrow function does not have this keyword!!! This is always
// dependant

operation.add();
