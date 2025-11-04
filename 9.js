// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('person-form');
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const tbody = document.querySelector('#person-table tbody');
  const headers = document.querySelectorAll('#person-table th');

  let people = [];
  let sortState = { name: 'asc', age: 'asc' };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    if (name && age) {
      people.push({ name, age });
      renderTable(people);
      form.reset();
      nameInput.focus();
    }
  });

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const key = header.dataset.key;
      const direction = sortState[key] === 'asc' ? 'desc' : 'asc';
      sortState[key] = direction;

      people.sort((a, b) => {
        if (typeof a[key] === 'string') {
          return direction === 'asc'
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key]);
        } else {
          return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
        }
      });

      renderTable(people);
    });
  });

  function renderTable(data) {
    tbody.innerHTML = '';
    data.forEach(person => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${person.name}</td><td>${person.age}</td>`;
      tbody.appendChild(row);
    });
  }
});