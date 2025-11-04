// script.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('open-modal');
  const closeBtn = document.getElementById('close-modal');

  // Abrir modal
  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  // Cerrar con botón
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Cerrar con clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('hidden');
    }
  });
});