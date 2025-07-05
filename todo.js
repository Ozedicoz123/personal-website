function addTask() {
    const taskText = document.getElementById('taskInput').value.trim()
    const category = document.getElementById('categorySelect').value

    if (taskText === '') {      
        alert('please fill the input');
        return;
    }

    const task = {
        text: taskText,
        category: category,
        done: false,
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))

    alert('task added')

    document.getElementById('taskInput').value = '';
    showtasks();

};
function showtasks() {
    let tasklist = document.getElementById('tasklist')
    tasklist.innerHTML = '';

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.className = 'task';
    if (task.done) div.classList.add('done');
    div.innerHTML = `
      <span>${task.text} (${task.category})</span>
      <div>
        <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleDone(${index})">
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;
    tasklist.appendChild(div);
  });

}

function toggleDone(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks[index].done = !tasks[index].done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showtasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  showtasks();
}

// Load tasks when page opens
window.onload = showtasks;