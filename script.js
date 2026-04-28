let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  tasks.forEach(function(task, index) {
    const li = document.createElement('li');
    li.textContent = task.tekst;

    if (task.ferdig) li.classList.add('ferdig');

    li.addEventListener('click', function() {
      tasks[index].ferdig = !tasks[index].ferdig;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Slett';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function leggTil() {
  const input = document.getElementById('task-input');
  const tekst = input.value.trim();

  if (tekst === '') return;

  tasks.push({ tekst: tekst, ferdig: false });
  saveTasks();
  renderTasks();

  input.value = '';
}

document.getElementById('add-btn').addEventListener('click', leggTil);
document.getElementById('task-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') leggTil();
});

renderTasks();