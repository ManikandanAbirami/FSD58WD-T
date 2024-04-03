//Copy by value

var myAge = 33; //DEC-12-1990
var myFriendAge = myAge; //JAN-03-1990

console.log("My age is: ", myAge);
console.log("Friend's age is: ", myFriendAge);

myFriendAge = myFriendAge + 1;

console.log("My age after: ", myAge);
console.log("Friend's age after: ", myFriendAge);

// Copy by reference - Objects

var myToyBox = { toy: "Car" };
// {} - Object
// [] - Array
var friendToyBox = myToyBox;

console.log("My toy is: ", myToyBox.toy);
console.log("Friend's toy is: ", friendToyBox.toy);

myToyBox.toy = "Doll";

console.log("My toy after change: ", myToyBox.toy);
console.log("Friend's toy after change: ", friendToyBox.toy);
