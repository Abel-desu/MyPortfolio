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

// Project popup window
 const seeProject = document.querySelectorAll(''); // Add your see project button class

 const projects = [
   {
     title: 'Tonic',
     devs: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     tags: ['html', 'css', 'javascript', ''],
     image: '', // Add adress to project snapshot
     liveButton: 'See Live', // This is a new button you don't need to change it
     sourceButton: 'See Source',  // This is a new button you don't need to change it
     live: '', // Download the photo in the see live button and add it's adress here 
     source: '', // Download the photo in the source button and add it's adress here 
   },
   {
     title: 'Multi-Post Stories',
     devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     tags: ['html', 'Ruby on rails', 'css', 'javascript'],
     image: '',  // Add adress to project snapshot
     liveButton: 'See Live',
     sourceButton: 'See Source',
     live: '', // Download the photo in the see live button and add it's adress here 
     source: '', // Download the photo in the source button and add it's adress here 
   },
   {
     title: 'Facebook 360',
     devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     tags: ['html', 'Ruby on rails', 'css', 'javascript'],
     image: '',  // Add adress to project snapshot
     liveButton: 'See Live',
     sourceButton: 'See Source',
     live: '', // Download the photo in the see live button and add it's adress here 
     source: '', // Download the photo in the source button and add it's adress here 
   },
   {
     title: 'Uber Navigation',
     devs: ['Uber', '•', 'Lead Developer', '•', '2018'],
     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
     tags: ['html', 'Ruby on rails', 'css', 'javascript'],
     image: '',  // Add adress to project snapshot
     liveButton: 'See Live',
     sourceButton: 'See Source',
     live: '', // Download the photo in the see live button and add it's adress here 
     source: '', // Download the photo in the source button and add it's adress here 
   },
 ];
