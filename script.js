const rulesButton = document.querySelector('.rules-btn');
const topRule = document.querySelector('.top-rule');

rulesButton.addEventListener('click', () => {
  topRule.innerHTML = `
    <div class="header">
      <h2>RULES</h2>
      <img src="images/icon-close.svg" alt="close" id="close-btn">
    </div>`;
  topRule.classList.toggle('hide');

  const closeBtn = document.getElementById('close-btn');
  closeBtn.addEventListener('click', () => {
    topRule.innerHTML = '';
    topRule.classList.add('hide');
  });
});


const userMove = (hand) => {
  console.log(hand);

  let images = document.querySelector(".images");
  images.style.display = "none";
}

















// // Get the score element by its ID
// const scoreElement = document.getElementById('score');

// // Select the buttons for the choices (rock, paper, scissors)
// const rockButton = document.querySelector('.rock');
// const paperButton = document.querySelector('.paper');
// const scissorsButton = document.querySelector('.scissors');

// // Add event listeners to the choice buttons
// rockButton.addEventListener('click', () => {
//   playGame('rock');
// });

// paperButton.addEventListener('click', () => {
//   playGame('paper');
// });

// scissorsButton.addEventListener('click', () => {
//   playGame('scissors');
// });

// // Add a keydown event listener to the document
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'r') {
//     playGame('rock');
//   } else if (event.key === 'p') {
//     playGame('paper');
//   } else if (event.key === 's') {
//     playGame('scissors');
//   }
// });

// // Rest of the code remains the same

// // Update the score displayed in the HTML
// function updateScoreElement() {
//   scoreElement.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
// }

// // Other functions and logic remain the same

// updateScoreElement();

// let isAutoPlaying = false;
// let intervalId;

// //const autoPlay = () => {

// //};
// function autoPlay() {
//   if (!isAutoPlaying) {
//     intervalId = setInterval(() => {
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     }, 1000);
//     isAutoPlaying = true;

//   } else {
//     clearInterval(intervalId);
//     isAutoPlaying = false;
//   }
// }
// function playGame(playerMove) {
//   const computerMove = pickComputerMove();

//   let result = '';

//   if (playerMove === 'scissors') {
//     if (computerMove === 'rock') {
//       result = 'You lose.';
//     } else if (computerMove === 'paper') {
//       result = 'You win.';
//     } else if (computerMove === 'scissors') {
//       result = 'Tie.';
//     }

//   } else if (playerMove === 'paper') {
//     if (computerMove === 'rock') {
//       result = 'You win.';
//     } else if (computerMove === 'paper') {
//       result = 'Tie.';
//     } else if (computerMove === 'scissors') {
//       result = 'You lose.';
//     }
    
//   } else if (playerMove === 'rock') {
//     if (computerMove === 'rock') {
//       result = 'Tie.';
//     } else if (computerMove === 'paper') {
//       result = 'You lose.';
//     } else if (computerMove === 'scissors') {
//       result = 'You win.';
//     }
//   }

//   if (result === 'You win.') {
//     score.wins += 1;
//   } else if (result === 'You lose.') {
//     score.losses += 1;
//   } else if (result === 'Tie.') {
//     score.ties += 1;
//   }

//   localStorage.setItem('score', JSON.stringify(score));

//   updateScoreElement();

//   document.querySelector('.js-result').innerHTML = result;

//   document.querySelector('.js-moves').innerHTML = `You
// <img src="images/${playerMove}.svg" class="move-icon">
// <img src="images/${computerMove}.svg" class="move-icon">
// Computer`;
// }

// function updateScoreElement() {
//   document.querySelector('.score')
//     .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
// }

// function pickComputerMove() {
//   const randomNumber = Math.random();

//   let computerMove = '';

//   if (randomNumber >= 0 && randomNumber < 1 / 3) {
//     computerMove = 'rock';
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = 'paper';
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//     computerMove = 'scissors';
//   }

