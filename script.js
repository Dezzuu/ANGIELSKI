document.getElementById('toggleButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const mainDiv = document.querySelector('.main');
    const aboutDiv = document.querySelector('.about');
    const aboutus = document.querySelector('.aboutus');
    
    aboutDiv.style.display = 'none';
    container.style.display = 'none';
    aboutus.style.display = 'none';
    mainDiv.style.display = 'block';
    

});




document.getElementById('toggleAbout').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const mainDiv = document.querySelector('.main');
    const aboutDiv = document.querySelector('.about');
    const aboutusopen = document.querySelector('.aboutus');
    
    container.style.display = 'none';
    mainDiv.style.display = 'none';
    aboutusopen.style.display = 'block';
    aboutDiv.style.display = 'none';
});


const texts = [
  "PedusStar...",
  "LEGENDS🔥🔥🔥🔥🔥...",
  "SEE OUR COACHES...",
];
const speed = 150;
const pauseBetweenTexts = 1000;

let textIndex = 0;
let i = 0;

const typeWriter = () => {
  const currentText = texts[textIndex];

  if (i < currentText.length) {
      document.getElementById("typewriter").textContent += currentText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
  } else {
      setTimeout(eraseText, pauseBetweenTexts);
  }
};

const eraseText = () => {
  const currentText = texts[textIndex];

  if (i > 0) {
      document.getElementById("typewriter").textContent = currentText.substring(0, i - 1);
      i--;
      setTimeout(eraseText, speed / 2);
  } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, pauseBetweenTexts);
  }
};

window.onload = () => {
  setTimeout(typeWriter, pauseBetweenTexts);
};


const containers = document.querySelectorAll('.image-container');

containers.forEach(container => {
    container.addEventListener('click', function() {
        this.classList.toggle('active'); 
    });
});





$(document).ready(function() {
  const textss = [
    "Do you know who we are...",
    "Daniel is the best sniper in the world!",
    "Fabian has a best headphones in the world!",
    "Dominik has a new phone...",
    "Bartek is good player..."
  ];

  
  function zmien(description) {
    
    $('.data').animate({ right: '20px' }, 1000, function() {
      
      $('.napis').html(description);
    });

   
    setTimeout(() => {
      $('.data').animate({ right: '-360px' }, 1000);
    }, 5000);
  }

 
  let currentIndex = 0;

  setInterval(() => {
    
    zmien(textss[currentIndex]);

    
    currentIndex = (currentIndex + 1) % textss.length;
  }, 7000); 
});

