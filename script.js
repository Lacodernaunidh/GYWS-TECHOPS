let currentTaskNumber = 1;

function addNewTask() {
  let inputBox = document.getElementById('taskInput');
  let taskText = inputBox.value.trim();

  if (taskText === '') {
    return;
  }

  let taskList = document.getElementById('taskList');
  let newTaskItem = document.createElement('li');

  newTaskItem.innerHTML = `📝 Task ${currentTaskNumber}: ${taskText} <span class="remove" onclick="removeTask(this)">✖</span>`;

  taskList.appendChild(newTaskItem);
  inputBox.value = '';
  currentTaskNumber++;
}

function removeTask(removeButton) {
  removeButton.parentElement.remove();
}
