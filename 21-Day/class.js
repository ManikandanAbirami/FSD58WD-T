class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  onComplete() {
    this.completed = !this.completed;
  }
}

function testClass() {
  const task = new Task("Learn JavaScript");
  task.onComplete();
  document.getElementById(
    "classOutput"
  ).innerHTML = `Task: ${task.description}, Completed: ${task.completed}`;
}
