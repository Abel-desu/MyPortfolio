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

 function display(index) {
   const main = document.querySelector('main');
   const {
     title,
     devs,
     description,
     tags,
     image,
     liveButton,
     sourceButton,
     live,
     source,
   } = projects[index];
   const dev1 = devs[0];
   const dev2 = devs[1];
   const dev3 = devs[2];
   const dev4 = devs[3];
   const dev5 = devs[4];
   const tag1 = tags[0];
   const tag2 = tags[1];
   const tag3 = tags[2];
   const tag4 = tags[3];

   const projectPopup = document.createElement('div');
   projectPopup.className = 'project-popup';
   projectPopup.innerHTML = `
     <div class="desktop-window">
       <div class="desktop-top-popup">
         <h2>${title}</h2>
         <button type='button' class="">X</button> ////Make sure to add your close-button class name///// remove this comment because it gives an error
       </div>
       <ul class=""> ////Make sure to add  the propperclass name///// remove this comment because it gives an error
         <li class="dev1">${dev1}</li> 
         <li class="dev2">${dev2}</li>
         <li class="dev3">${dev3}</li>
         <li class="dev4">${dev4}</li>
         <li class="dev5">${dev5}</li>
       </ul>
       <img class="desktop-popup-snapshot" src=${image} alt="project 1 snapshot">  ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
       <p class="p-popup">${description}</p> ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
       <ul class="prog-languages">   ////Make sure to add  the propperclass name///// remove this comment because it gives an error
         <li class="lang">${tag1}</li>   ////Make sure to add  the propperclass name///// remove this comment because it gives an error
         <li class="lang">${tag2}</li>   ////
         <li class="lang">${tag3}</li>   ////
         <li class="lang">${tag4}</li>   ////
       </ul>
       <hr>
       <button type='button' class="popup-button"> ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
         ${liveButton}
         <img class="logo-popup-button" src=${live}> ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
       </button>
       <button type='button' class="popup-button">  ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
         ${sourceButton}
         <img class="logo-popup-button" src=${source}>  ////This is a new class, you can change it or keep it///// remove this comment because it gives an error
       </button>
     </div>`;
   
   main.appendChild(projectPopup);
   const close = document.querySelector(''); // Add the class for the close button
   close.addEventListener('click', () => {
   main.removeChild(projectPopup);
   });
 }
