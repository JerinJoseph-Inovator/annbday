const button = document.getElementById('change-button');
const images = document.querySelectorAll('.container img');
const eye = document.querySelector('.eye');
const eyeball = document.querySelector('.eyeball');
// Get the button element
const startButton = document.getElementById('eyeButton'); // Assuming you have a button with id 'startButton'

//        AUDIIOOO
document.addEventListener('DOMContentLoaded', function() {
  var clickableHeader = document.getElementById('clickableHeader');
  var audio = document.getElementById('myAudio');

  clickableHeader.addEventListener('click', function() {
      if (audio.paused) {
          audio.play(); // Start playing the audio
      } else {
          audio.pause(); // Pause the audio if it's already playing
      }
  });
});

const Eyebutton = document.getElementById('eyeButton');
    const audio = document.getElementById('audiosfx');

    Eyebutton.addEventListener('click', () => {
      audiosfx.play();
    });



document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const gradientCenterX = (mouseX / window.innerWidth) * 100;
    const gradientCenterY = (mouseY / window.innerHeight) * 100;
  
    const revealedArea = document.querySelector(".revealed-area");
    revealedArea.style.background = `radial-gradient(
      circle 60px at ${gradientCenterX}% ${gradientCenterY}%,
      transparent 10%,
      rgba(0, 0, 0, 0.98)
    )`;
  });



button.addEventListener('click', () => {
  images[0].src = 'resources/read/chp3.jpg';
  images[1].src = 'resources/read/chp3.jpg';
});


eye.addEventListener('click', () => {
  if (eyeball.style.top === '25px') {
    eyeball.style.top = '10px';
    eyeball.style.left = '10px';
  } else {
    eyeball.style.top = '25px';
    eyeball.style.left = '25px';
  }
});


function goToPage(page) {
    window.location.href = page;
  }


  
// Get the .eye element
const eyeElement = document.querySelector('.eye');

// Add event listener to the button
startButton.addEventListener('click', () => {
  // Show the eye by changing its display property
  eyeElement.style.display = 'block';
  
  // Add the 'blink-animation' class to start the animation
  eyeElement.classList.add('blink-animation');
 
});
















  // SPIDER ANIMATION

  
  const spiderContainer = document.querySelector('.spider-container');
  const mainContainer = document.querySelector('.container');
  
  function createSpider() {
    const spider = document.createElement('div');
    spider.classList.add('spider');
    spider.style.top = `${Math.floor(Math.random() * (mainContainer.clientHeight - -50))}px`; // Randomize vertical position within main-container
    spider.style.left = `${Math.floor(Math.random() * (mainContainer.clientWidth - 2500))}px`; // Randomize horizontal position within main-container
  
    spider.style.animationDuration = `${Math.floor(Math.random() * 8) + 2}s`; // Randomize animation duration between 3 and 8 seconds
  
    const sizeVariation = Math.floor(Math.random() * 300) + 50; // Randomize size between 50px and 100px
    spider.style.width = `${sizeVariation}px`;
    spider.style.height = `${sizeVariation / 2}px`;
  
    const speedVariation = Math.random() + 0.5; // Randomize speed between 0.5 and 1.5
    spider.style.animationTimingFunction = `linear, cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    spider.style.animationDuration = `${speedVariation * 5}s`;
  
    const direction = Math.random() > 0.5 ? 1 : -1; // Randomize direction
    // spider.style.animationDirection = direction === 1 ? 'normal' : 'reverse';


    spiderContainer.appendChild(spider);
  }

  const spider2Container = document.querySelector('.spider2-container');
  function createSpider2() {
    const spider2 = document.createElement('div');
    spider2.classList.add('spider2');
    spider2.style.top = `${Math.floor(Math.random() * (mainContainer.clientHeight - -50))}px`; // Randomize vertical position within main-container
    spider2.style.left = `${Math.floor(Math.random() * (mainContainer.clientWidth - 2500))}px`; // Randomize horizontal position within main-container
  
    spider2.style.animationDuration = `${Math.floor(Math.random() * 8) + 2}s`; // Randomize animation duration between 3 and 8 seconds
  
    const sizeVariation = Math.floor(Math.random() * 300) + 50; // Randomize size between 50px and 100px
    spider2.style.width = `${sizeVariation}px`;
    spider2.style.height = `${sizeVariation / 2}px`;
  
    const speedVariation = Math.random() + 0.5; // Randomize speed between 0.5 and 1.5
    spider2.style.animationTimingFunction = `linear, cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    spider2.style.animationDuration = `${speedVariation * 5}s`;
  
    const direction = Math.random() > 0.5 ? -1 : 1; // Randomize direction
    spider2.style.animationDirection = direction === 1 ? 'reverse' : 'reverse';


    spider2Container.appendChild(spider2);
  }
  
  // Create multiple spiders
  for (let i = 0; i < 16; i++) {
    createSpider();
    createSpider2();
  }
  