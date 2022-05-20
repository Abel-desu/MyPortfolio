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
// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('msg');
// const submit = document.getElementById('submit');

// function storeData() {
//     const nameValue = username.value;
//   const emailValue = email.value;
//   const messageValue = message.value;
//   const user = {
//     nameValue,
//     emailValue,
//     messageValue,
//   };
//   if (nameValue && emailValue && messageValue) {
//     const stringedUser = JSON.stringify(user);
//     localStorage.setItem('user', stringedUser);
//   }
// }

// submit.addEventListener('click', storeData);
// username.addEventListener('keyup', storeData);
// email.addEventListener('keyup', storeData);
// message.addEventListener('keyup', storeData);
// const username = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('msg');
// const submit = document.getElementById('submit');

// function storeData() {
//     const nameValue = username.value;
//   const emailValue = email.value;
//   const messageValue = message.value;
//   const user = {
//     nameValue,
//     emailValue,
//     messageValue,
//   };
//   if (nameValue && emailValue && messageValue) {
//     const stringedUser = JSON.stringify(user);
//     localStorage.setItem('user', stringedUser);
//   }
// }

// submit.addEventListener('click', storeData);
// username.addEventListener('keyup', storeData);
// email.addEventListener('keyup', storeData);
// message.addEventListener('keyup', storeData);const username = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('msg');
// const submit = document.getElementById('submit');

// function storeData() {
//     const nameValue = username.value;
//   const emailValue = email.value;
//   const messageValue = message.value;
//   const user = {
//     nameValue,
//     emailValue,
//     messageValue,
//   };
//   if (nameValue && emailValue && messageValue) {
//     const stringedUser = JSON.stringify(user);
//     localStorage.setItem('user', stringedUser);
//   }
// }

// submit.addEventListener('click', storeData);
// username.addEventListener('keyup', storeData);
// email.addEventListener('keyup', storeData);
// message.addEventListener('keyup', storeData);