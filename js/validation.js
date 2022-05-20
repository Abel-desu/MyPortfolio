const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
form.addEventListener('submit', (e) => {
  const messages = [];
  if (email.value.match(/^[a-z@.0-9-_]*$/)) {
    messages.push('your email is correct');
  } else {
    e.preventDefault();
    messages.push('Enter the email in lower case to continue');
    errorElement.innerText = messages.join(', ');
  }
});
const emailMobile = document.getElementById('email-mobile');
const contactForm = document.getElementById('contact-form');
const errormsg = document.getElementById('errormsg');
contactForm.addEventListener('submit', (e) => {
  const messages = [];
  if (emailMobile.value.match(/^[a-z@.0-9-_]*$/)) {
    messages.push('your email is correct');
  } else {
    e.preventDefault();
    messages.push('Enter the email in lower case to continue');
    errormsg.innerText = messages.join(', ');
  }
});
