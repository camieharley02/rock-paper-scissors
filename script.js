const rulesButton = document.querySelector('.rules-btn');
const topRule = document.querySelector('.top-rule');
const main = document.querySelector('.advance');
let results = document.querySelector(".results"); // Move the declaration of 'results' here

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

const option = {
  "rock": "images/rock.svg",
  "paper": "images/paper.svg",
  "scissors": "images/scissors.svg",
};

const options = {
  "rock": "images/rock.svg",
  "paper": "images/paper.svg",
  "scissors": "images/scissors.svg",
  "lizard": "images/lizard.svg",
  "spock": "images/spock.svg",
};

const userMove = (hand) => {
  // hide current page
  let images = document.querySelector(".images");
  images.style.display = "none";
  // show second page
  results.style.display = "flex"; // Use 'results' directly here

  // displays user choice
  document.getElementById("userChoice").src = options[hand];

  let computerHand = computerMove(true); // Always consider all 5 options for the computer
  midButton(hand, computerHand);
}

const computerMove = () => {
  const shosho = document.getElementById('advance2');

  if (shosho) {
    let hand2 = ["rock", "paper", "scissors", "lizard", "spock"];
    let computerHand2 = hand2[Math.floor(Math.random() * 5)];
    document.getElementById("computerChoice").src = options[computerHand2];
    
    return computerHand2;
  } else {
    let hand = ["rock", "paper", "scissors"];
    let computerHand = hand[Math.floor(Math.random() * 3)];
    document.getElementById("computerChoice").src = option[computerHand];

    return computerHand;
  }
}

let SCORE = 0;

const midButton = (userChoice, computerHand) => {
  const outcomes = {
    'rock': { 'rock': 'TIE', 'paper': 'YOU LOSE', 'scissors': 'YOU WIN', 'lizard': 'YOU WIN', 'spock': 'YOU LOSE' },
    'paper': { 'rock': 'YOU WIN', 'paper': 'TIE', 'scissors': 'YOU LOSE', 'lizard': 'YOU LOSE', 'spock': 'YOU WIN' },
    'scissors': { 'rock': 'YOU LOSE', 'paper': 'YOU WIN', 'scissors': 'TIE', 'lizard': 'YOU WIN', 'spock': 'YOU LOSE' },
    'lizard': { 'rock': 'YOU LOSE', 'paper': 'YOU WIN', 'scissors': 'YOU LOSE', 'lizard': 'TIE', 'spock': 'YOU WIN' },
    'spock': { 'rock': 'YOU WIN', 'paper': 'YOU LOSE', 'scissors': 'YOU WIN', 'lizard': 'YOU LOSE', 'spock': 'TIE' }
  };

  const result = outcomes[userChoice][computerHand];
  const scoreChange = result === 'YOU WIN' ? 1 : result === 'YOU LOSE' ? -1 : 0;

  setDecision(result);
  setScore(SCORE + scoreChange);

  // Add the winner class based on the result
  if (result === 'YOU WIN') {
    document.getElementById('userChoice').classList.add('winner');
  } else if (result === 'YOU LOSE') {
    document.getElementById('computerChoice').classList.add('winner');
  }
}

const restartGame = () => {
  results.style.display = "none";

  let img = document.querySelector(".images");
  img.style.display = "grid";
}

const setDecision = (midText) => {
  document.querySelector(".midText h2").innerText = midText;
}

const setScore = (scores) => {
  SCORE = scores;
  document.querySelector(".scores span").innerText = scores;
}
