function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  if (taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.onclick = function () {
      this.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}
