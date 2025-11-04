// script.js
const faqs = [
  {
    pregunta: "¿Cuál es el horario de atención?",
    respuesta: "Nuestro horario es de lunes a viernes de 9:00 a 18:00."
  },
  {
    pregunta: "¿Cómo puedo contactar al soporte?",
    respuesta: "Podés escribirnos a soporte@ejemplo.com o llamarnos al 0800-123-456."
  },
  {
    pregunta: "¿Aceptan pagos con tarjeta?",
    respuesta: "Sí, aceptamos todas las tarjetas de crédito y débito."
  },
  {
    pregunta: "¿Dónde están ubicados?",
    respuesta: "Estamos en Amboy, Córdoba, Argentina."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('acordeon');

  faqs.forEach(({ pregunta, respuesta }) => {
    const item = document.createElement('div');
    item.classList.add('acordeon-item');

    const header = document.createElement('div');
    header.classList.add('acordeon-header');
    header.textContent = pregunta;

    const content = document.createElement('div');
    content.classList.add('acordeon-content');
    content.textContent = respuesta;

    header.addEventListener('click', () => {
      content.classList.toggle('visible');
    });

    item.appendChild(header);
    item.appendChild(content);
    container.appendChild(item);
  });
});
