document.addEventListener('DOMContentLoaded', loadTask);
document.getElementById('task-form').addEventListener('submit', saveTask);
document.getElementById('delete-task').addEventListener('click', deleteTask);

// Load task data for editing if task ID is present in URL
function loadTask() {
  const urlParams = new URLSearchParams(window.location.search);
  const taskId = urlParams.get('id');

  if (taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      document.getElementById('task-title').textContent = 'Edit Task';
      document.getElementById('task-id').value = task.id;
      document.getElementById('task-name').value = task.title;
      document.getElementById('task-status').value = task.status;
      document.getElementById('delete-task').style.display = 'inline';  // Show delete button
    }
  }
}

// Save new or edited task
function saveTask(e) {
  e.preventDefault();
  const taskId = document.getElementById('task-id').value;
  const taskTitle = document.getElementById('task-name').value;
  const taskStatus = document.getElementById('task-status').value;

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  if (taskId) {
    // Edit existing task
    tasks = tasks.map(task => task.id === taskId ? { id: task.id, title: taskTitle, status: taskStatus } : task);
  } else {
    // Add new task
    const newTask = {
      id: Date.now().toString(),
      title: taskTitle,
      status: taskStatus
    };
    tasks.push(newTask);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.href = 'dashboard.html';
}

// Delete a task
function deleteTask() {
  const taskId = document.getElementById('task-id').value;
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.id !== taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.href = 'dashboard.html';
}
