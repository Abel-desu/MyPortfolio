const header = document.querySelector('header');
const section = document.createElement('section');
header.appendChild(section);
// section.innerHTML = `<p>Hello eorld</p>`;

const open = document.querySelector('#menue-button');

open.addEventListener('click', () => {
  const window = document.createElement('div');
  window.className = 'window';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `<div class="all">
  <i class="fa-solid fa-xmark close"></i>
<ul id="popup">
<li><a id="portifolio" class="pop-link" href="#port">portifolio</a></li>
<li><a id="about-pop"class="pop-link" href="#about">about</a></li>
<li><a id="contact-pop" class="pop-link" href="#contact">contact</a></li>
</ul>
  </div>`;
  window.appendChild(popup);
  header.appendChild(window);

  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    header.removeChild(window);
  });
  document.querySelector('#portifolio').addEventListener('click', () => {
    window.removeChild(popup);
  });
  document.querySelector('#about-pop').addEventListener('click', () => {
    window.removeChild(popup);
  });
  document.querySelector('#contact-pop').addEventListener('click', () => {
    window.removeChild(popup);
  });
});