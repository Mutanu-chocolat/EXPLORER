// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
  
      // Create a new task element (li)
      const newTask = document.createElement('li');
  
      // Create checkbox and span for task text
      newTask.innerHTML = `
        <input type="checkbox" onclick="toggleComplete(this)">
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
  
      // Append the new task to the task list
      taskList.appendChild(newTask);
  
      // Clear the input field after adding the task
      taskInput.value = '';
    }
  }
  
  // Function to toggle the "completed" state of a task
  function toggleComplete(checkbox) {
    const task = checkbox.parentElement;
    if (checkbox.checked) {
      task.classList.add('completed');
    } else {
      task.classList.remove('completed');
    }
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
  }
  