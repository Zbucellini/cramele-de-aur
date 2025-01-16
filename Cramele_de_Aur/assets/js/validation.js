const form = document.querySelector('.contact-form');
const emailInput = document.querySelector('input[type="email"]');
const message = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (!validateEmail(emailInput.value)) {
    e.preventDefault();
    message.textContent = 'Introduceți un email valid!';
    message.style.color = 'red';
  } else {
    message.textContent = '';
  }
});

function validateEmail(email) {
  const re = new RegExp(
    '^(?!.*\\..*\\..*)[a-zA-Z0-9_%+\\-]+(?:\\.[a-zA-Z0-9_%+\\-]+)*@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,10}$'
  );
  return re.test(email.trim());
}
