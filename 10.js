// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const dropzones = document.querySelectorAll('.dropzone');

  let tasks = JSON.parse(localStorage.getItem('kanban-tasks')) || [];

  function saveTasks() {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }

  function createCard(text, status) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = text;
    card.setAttribute('draggable', 'true');
    card.dataset.text = text;

    card.addEventListener('dragstart', () => {
      card.classList.add('dragging');
    });

    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
    });

    document.getElementById(status).appendChild(card);
  }

  function renderBoard() {
    dropzones.forEach(zone => zone.innerHTML = '');
    tasks.forEach(task => createCard(task.text, task.status));
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    tasks.push({ text, status: 'pendiente' });
    saveTasks();
    renderBoard();
    form.reset();
    input.focus();
  });

  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
      const dragged = document.querySelector('.dragging');
      const newStatus = zone.id;
      const text = dragged.dataset.text;

      tasks = tasks.map(task =>
        task.text === text ? { ...task, status: newStatus } : task
      );

      saveTasks();
      renderBoard();
    });
  });

  renderBoard();
});