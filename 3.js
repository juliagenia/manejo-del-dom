// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      list.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = '';
    input.focus();
  });
});