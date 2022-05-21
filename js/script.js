const header = document.querySelector('header');
const section = document.createElement('section');
header.appendChild(section);

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
const seeProject = document.querySelectorAll('.show-project'); // Add your see project button class
const mobileProject = document.querySelectorAll('.mobile-project');
const projects = [
  {
    id: 1,
    title: 'Tonic',
    devs: ['CANOPY', '•', 'Back End Dev', '•', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'Bootstraps'],
    image: 'images/Snapshoot-popup.png', // Add adress to project snapshot
    liveButton: 'live button', // This is a new button you don't need to change it
    sourceButton: 'see source', // This is a new button you don't need to change it
    live: 'images/icon.png', // Download the photo in the see live button and add it's adress here
    source: 'images/Icon-GitHub.png', // Download the photo in the source button and add it's adress here
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'Bootstraps'],
    image: 'images/4.png',
    liveButton: 'live button',
    sourceButton: 'See Source',
    live: 'images/icon.png', // Download the photo in the see live button and add it's adress here
    source: 'images/Icon-GitHub.png', // Download the photo in the source button and add it's adress here
  },
  {
    id: 3,
    title: 'Facebook 360',
    devs: ['FACEBOOK', '•', 'Full Stack Dev', '•', '2015'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'Bootstraps'],
    image: 'images/d3.png', // Add adress to project snapshot
    liveButton: 'live button',
    sourceButton: 'See Source',
    live: 'images/icon.png', // Download the photo in the see live button and add it's adress here
    source: 'images/Icon-GitHub.png', // Download the photo in the source button and add it's adress here
  },
  {
    id: 4,
    title: 'Uber Navigation',
    devs: ['Uber', '•', 'Lead Developer', '•', '2018'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    tags: ['html', 'Ruby on rails', 'css', 'javascript', 'github', 'Bootstraps'],
    image: 'images/d4.png', // Add adress to project snapshot
    liveButton: 'live button',
    sourceButton: 'See Source',
    live: 'images/icon.png', // Download the photo in the see live button and add it's adress here
    source: 'images/Icon-GitHub.png', // Download the photo in the source button and add it's adress here
  },
];

function display(index) {
  const main = document.querySelector('main');
  const {
    id,
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
  const tag5 = tags[4];
  const tag6 = tags[5];
  const projectPopup = document.createElement('div');
  projectPopup.className = 'project-popup';
  projectPopup.innerHTML = `
     <div class="desktop-window">
     <div class="all-desktop-popup"
       <div class="desktop-top-popup">
         <h2>${title}</h2>
         <button type='button' class="X-button">X</button>
       </div>
       <ul class="devls"> 
         <li class="dev1">${dev1}</li> 
         <li class="dev2">${dev2}</li>
         <li class="dev3">${dev3}</li>
         <li class="dev4">${dev4}</li>
         <li class="dev5">${dev5}</li>
       </ul>
       <img class="desktop-popup-snapshot image-${id}" src=${image} alt="project 1 snapshot">  
       <div class="popup-footer">
       <p class="p-popup">${description}</p> 
       <section class=lang-button>
        <ul class="prog-languages">  
        <ul class="ul">
         <li class="lang">${tag1}</li>   
         <li class="lang">${tag2}</li>  
         <li class="lang">${tag3}</li> 
         </ul>
         <ul class="ul1">
         <li class="lang">${tag4}</li>   
         <li class="lang">${tag5}</li>   
         <li class="lang">${tag6}</li>  
         </ul>
       </ul>
       <div class ="desktopup-button">  
       <button type='button' class="popup-button">
         ${liveButton}
         <img class="logo-popup-button" src=${live}> 
       </button>
       <button type='button' class="popup-button">  
         ${sourceButton}
         <img class="logo-popup-button" src=${source}>  
       </button>
       </section>
     </div>
     </div>
     </div>
     </div>`;
  main.appendChild(projectPopup);
  const close = document.querySelector('.X-button');
  close.addEventListener('click', () => {
    main.removeChild(projectPopup);
  });
}
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', () => display(i));
}
for (let i = 0; i < mobileProject.length; i += 1) {
  mobileProject[i].addEventListener('click', () => display(i));
}
