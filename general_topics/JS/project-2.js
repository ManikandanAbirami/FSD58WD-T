// Contact Manager
var contacts = [
  { name: "Manikandan", phone: "123-456-7890" },
  { name: "John", phone: "343-456-7890" },
];

var running = true; //flag

function contactLists() {
  var contactList = "";
  for (var i = 0; i < contacts.length; i++) {
    contactList +=
      i + 1 + "." + contacts[i].name + " - " + contacts[i].phone + "\n"; //1.Manikandan - 123-456-7890
  }
  return contactList;
}

//view, add, search, update, delete, quit
while (running) {
  var action = prompt(
    "Choose an action: view, add, search, update, delete, or quit:"
  );

  if (action === "view") {
    var contactList = contactLists();
    alert(contactList);
  } else if (action === "add") {
    var _name = prompt("Enter the name:");
    var _phone = prompt("Enter the phone number:");
    contacts.push({ name: _name, phone: _phone });
    var contactList = contactLists();
    alert("Contact added." + "\n" + contactList);
  } else if (action === "search") {
    var _name = prompt("Enter the name to search:");
    var found = false;
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].name === _name) {
        alert("Found: " + contacts[i].name + " - " + contacts[i].phone);
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Contact not found!");
    }
  } else if (action === "update") {
    var _name = prompt("Enter the name of the contact to update:");
    var found = false;
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].name === _name) {
        var newPhone = prompt("Enter the new phone number:");
        contacts[i].phone = newPhone;
        alert("Contact updated!");
        found = true;
        break;
      }
    }
    if (!found) {
      alert("Contact not found!");
    }
  } else if (action === "delete") {
    var _name = prompt("Enter the name of the contact to delete:");
    var index = -1;
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].name === _name) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      contacts.splice(index, 1);
      alert("Contact deleted.");
    } else {
      alert("Contact not found.");
    }
  } else if (action === "quit") {
    running = false;
  } else {
    alert("Invalid action.");
  }
}
