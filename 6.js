// script.js
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Desactivar todas las pestañas
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Ocultar todos los paneles
      panels.forEach(panel => panel.classList.remove('visible'));

      // Mostrar el panel asociado
      const panelId = tab.dataset.panel;
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.classList.add('visible');
      }
    });
  });
});