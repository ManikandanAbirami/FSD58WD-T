document.addEventListener("DOMContentLoaded", function () {
  fetchUsers();
});

let users = [];

async function fetchUsers() {
  debugger;
  const response = await fetch(
    "https://lucifer-quotes.vercel.app/api/quotes/50"
  );
  users = await response.json();
  renderUsers();
}

function renderUsers() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${index + 1}</td>
    <td>${user.quote}</td>
    <td>${user.author}</td>
    <td>
        <button onclick="editUser(${user.id})" type="button" 
        class="btn btn-secondary btn-sm">Edit</button>
        <button onclick="deleteUser(${user.id})" type="button" 
        class="btn btn-danger btn-sm">Delete</button>
    </td>`;
    userList.appendChild(row);
  });
}

async function createOrUpdateUser() {
  debugger;
  const id = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const user = { id, name, email };

  if (id) {
    // Simulate a update
    const userIndex = users.findIndex((u) => u.id.toString() == id);
    users[userIndex] = { ...users[userIndex], name, email };
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  } else {
    // Simulate a create
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const newUser = await response.json();
    users.push({ ...newUser, id: users.length + 1 });
  }
  renderUsers();

  //Reset form
  document.getElementById("userId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function editUser(userId) {
  const user = users.find((u) => u.id === userId);
  document.getElementById("userId").value = user.id;
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
}

async function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: "DELETE",
  });
  renderUsers();
}
