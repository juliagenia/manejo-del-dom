// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const formMessage = document.getElementById('form-message');

  function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 3) {
      nameError.textContent = 'El nombre debe tener al menos 3 caracteres.';
      nameInput.classList.add('invalid');
      nameInput.classList.remove('valid');
      return false;
    } else {
      nameError.textContent = '';
      nameInput.classList.remove('invalid');
      nameInput.classList.add('valid');
      return true;
    }
  }

  function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      emailError.textContent = 'Ingrese un email válido.';
      emailInput.classList.add('invalid');
      emailInput.classList.remove('valid');
      return false;
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('invalid');
      emailInput.classList.add('valid');
      return true;
    }
  }

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
      formMessage.textContent = 'Formulario enviado correctamente ✅';
      formMessage.style.color = '#2ecc71';
      form.reset();
      nameInput.classList.remove('valid');
      emailInput.classList.remove('valid');
    } else {
      formMessage.textContent = 'Por favor corrija los errores ❌';
      formMessage.style.color = '#e74c3c';
    }
  });
});