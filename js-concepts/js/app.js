// Importing the TaskManager class
import { TaskManager } from "./taskmanager.js";

// document.addEventListener("DOMContentLoaded", () => {
document.getElementById("done").addEventListener("click", () => {
  completed();
});
// });

const manager = new TaskManager();
manager.addTask("Learn JavaScript modules");
console.log(manager.tasks);

function completed() {
  manager.addTask("Classes", true);
  console.log(manager.tasks);
}
