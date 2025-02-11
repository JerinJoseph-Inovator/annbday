const retryBtn = document.getElementById('retry-btn'); // Added retry button reference
const words = ['doppelganger']; 
// Get the button element by its ID
var nxtButn = document.getElementById('nxtBtn');

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    audio.play();
  });

  const audio = document.getElementById('myAudio');
  const playPauseButton = document.getElementById('playPauseButton');

  function togglePlayPause() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  }


let selectedWord;
let guessedLetters = [];
let hangmanImageIndex = 0;
let flag = 1;
let flag2 = 1;

const hangmanImages = [
  'resources/hangman/hangman0.jpg',
  'resources/hangman/hangman1.jpg',
  'resources/hangman/hangman2.jpg',
  'resources/hangman/hangman3.jpg',
  'resources/hangman/hangman4.jpg',
  'resources/hangman/hangman5.jpg',
  'resources/hangman/hangman6.jpg'
];

const hangmanContainer = document.getElementById('hangman-container');
const wordDisplay = document.getElementById('word-display');
const guessInput = document.getElementById('guess');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');

// Show retry button after selecting the word
retryBtn.style.display = 'inline-block';

// Show retry button after winning and losing
retryBtn.style.display = 'inline-block';


function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
  
      if (--timer < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = 'Expired';
        flag = 0;
        if(flag2 == 0){
            // Enable the button
            nxtButn.disabled = false;
        }
      }
    }, 1000);
  }
  
  const duration = 90; // 1.5 minute
  startCountdown(duration);
  



function selectWord() {
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  hangmanImageIndex = 0;
  renderHangman();
  renderWordDisplay();
  message.textContent = '';
}

function renderHangman() {
  hangmanContainer.innerHTML = `<img src="${hangmanImages[hangmanImageIndex]}" alt="Hangman Image">`;
}

function renderWordDisplay() {
  let display = '';
  for (const char of selectedWord) {
    if (guessedLetters.includes(char)) {
      display += char + ' ';
    } else {
      display += '_ ';
    }
  }
  wordDisplay.textContent = display.trim();
}

function checkWin() {
  const wordArray = selectedWord.split('');
  const correctGuesses = wordArray.filter(char => guessedLetters.includes(char));
  if (correctGuesses.length === wordArray.length) {
    message.textContent = 'Congratulations! You won!';
    flag2 = 0;
    if(flag == 0){
        // Enable the button
        nxtButn.disabled = false;
    }
  }
}



function checkGuess() {
  const guess = guessInput.value.toLowerCase();
  if (guess && !guessedLetters.includes(guess)) {
    guessedLetters.push(guess);
    if (!selectedWord.includes(guess)) {
      hangmanImageIndex++;
      if (hangmanImageIndex == hangmanImages.length) {
        message.textContent = 'Game Over! You lost.';
        retryBtn.style.display = 'inline-block'; // Show retry button after losing
        return;
      }
      
      }
    }
    renderHangman();
    renderWordDisplay();
    checkWin();
  }
  guessInput.value = '';

// Retry button functionality
retryBtn.addEventListener('click', () => {
    selectWord();
    retryBtn.style.display = 'none'; // Hide retry button after starting a new game
  });
  


selectWord();
guessBtn.addEventListener('click', checkGuess);
