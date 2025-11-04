// script.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const nameList = document.getElementById('name-list');
  const names = nameList.getElementsByTagName('li');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    Array.from(names).forEach(name => {
      const text = name.textContent.toLowerCase();
      name.style.display = text.includes(filter) ? 'block' : 'none';
    });
  });
});