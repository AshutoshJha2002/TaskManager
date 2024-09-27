document.addEventListener('DOMContentLoaded', loadTasks);

// Load tasks on dashboard
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskList = document.getElementById('task-list');
  const filter = document.getElementById('filter-status').value;

  taskList.innerHTML = '';  // Clear list before loading
  tasks.forEach(task => {
    if (filter === 'all' || task.status === filter) {
      const li = document.createElement('li');
      li.textContent = `${task.title} - ${task.status}`;
      li.onclick = () => {
        window.location.href = `taskmanagement.html?id=${task.id}`;
      };
      taskList.appendChild(li);
    }
  });
}

// Filter tasks based on status
function filterTasks() {
  loadTasks();
}
