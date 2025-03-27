const audio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');

setTimeout(() => {
  document.querySelector('.name').style.display = 'none';
}, 41000); // 41 seconds delay

// Get the counter element
const counterElement = document.getElementById('counter');
// Get the button element
const nextPageBtn = document.getElementById('nextPageBtn');

// Set the initial time in seconds (2 minutes = 120 seconds)
let time = 120;

// Update the counter every second
const countdown = setInterval(() => {
  // Convert time to minutes and seconds
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Display the time in MM:SS format
  counterElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Decrease time by 1 second
  time--;

  // If time reaches 0, stop the countdown and enable the button
  if (time < 0) {
    clearInterval(countdown);
    counterElement.textContent = 'Time Up!';
    nextPageBtn.removeAttribute('disabled'); // Enable the button
  }
}, 1000);

// Disable the button initially
nextPageBtn.setAttribute('disabled', true);

// Add an event listener to the button to navigate to the next page
nextPageBtn.addEventListener('click', () => {
  window.location.href = 'cred.html';
});

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.name');
  setTimeout(() => {
      element.style.visibility = 'hidden';
  }, 13000); // Hide element after 13 seconds
});

window.onload = function() {
  // Check if the loading page has signaled completion
  if (localStorage.getItem('loadingComplete')) {
    document.getElementById('main-content').style.display = 'block';
  }
};

(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        timer = null;
    console.log('wat', card);

    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
      
      let script = `
  A small poem... Can you assume it's 21st Feb
  The day was red,
  And I read about her,
  And I dreamt about her,
  While eating pancakes, with coffee and bread,
  Thinking she will soon be where my heart has led.

  The day was pink,
  But my phone didn’t ring.
  When it was cherry blossom,
  I felt her hands in mine, and it was spring,
  Thinking she was the song my heart will forever sing, the joy she’ll bring.

  The day was golden,
  As I sat with chicken chilli, lost in a dream,
  Her laughter lingered in the evening glow,
  Like ripples upon a quiet stream,
  A melody soft, a love unseen, yet wholly supreme.

  The day was silver,
  Her hair flowed like the gentle night,
  A cascade of silk, kissed by the moon,
  Her smile—a lantern, pure and bright,
  Guiding my heart from endless ruin.

  The day was ours,
  Her beauty spoke from Cupid’s bow to her merry cheeks,
  A mole on her palm, a tale untold,
  Something was missing—a whisper, a sign, the love fate seeks.

  The day was luminous,
  In her eyes shone galaxies of gentle light,
  Reflecting kindness and untold goodness, so rare and true,
  Each glance a promise, each smile a sacred rite,
  And in that quiet, wondrous moment of all I knew,
  I found her.
`;
      
      let counter = 0;
      let intervalID = setInterval(() => {
        counter++;
        style.textContent = script.substring(0, counter);
        style.scrollTop = style.scrollHeight;
        if (counter > script.length) {
          clearInterval(intervalID);
        }
      }, 90);
    });

    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });
}());

// Select the element where the poem is printed
const style = document.querySelector(".text pre");
// Reduce the font size of the poem text
if (style) {
  style.style.fontSize = "8px"; // Adjust font size as desired
}

// Select card element (ensure your HTML has elements with these classes for proper selection)
const card = document.querySelector(".front.face.back.face");
