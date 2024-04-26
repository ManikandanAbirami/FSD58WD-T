// Importing utilities
import { formatDate } from "./utils.js";

export class TaskManager {
  constructor() {
    // let, const, var : Scoping, hoisting
    this.tasks = []; // let tasks = []; --> this.tasks = [] lexical scoping
  }

  addTask(description, completed = false) {
    const task = {
      description,
      date: formatDate(new Date()),
      completed: completed,
    };
    this.tasks.push(task);
  }
}
