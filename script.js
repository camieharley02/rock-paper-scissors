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
  let results = document.querySelector(".results")
  results.style.display = "flex"

  // displays user choice
  document.getElementById("userChoice").src = options[hand];

  let computerHand = computerMove(true); // Always consider all 5 options for the computer
  midButton(hand, computerHand);
}

const computerMove = () => {
  let hand = ["rock", "paper", "scissors", "lizard", "spock"];
  let computerHand = hand[Math.floor(Math.random() * hand.length)];

  document.getElementById("computerChoice").src = options[computerHand];

  return computerHand;
}

 let SCORE = 0;

const midButton = (userChoice, computerHand)=>{
  if (userChoice == "paper" && computerHand == "scissors") {
    setDecision("YOU LOSE");
    setScore(SCORE - 1);
  }
  if (userChoice == "paper" && computerHand == "rock") {
    setDecision("YOU WIN");
    setScore(SCORE + 1);
  }
  if (userChoice == "paper" && computerHand == "paper") {
    setDecision("TIE");
  }
  if (userChoice == "rock" && computerHand == "scissors") {
    setDecision("YOU WIN");
    setScore(SCORE + 1);
  }
  if (userChoice == "rock" && computerHand == "paper") {
    setDecision("YOU LOSE");
    setScore(SCORE - 1);
  }
  if (userChoice == "rock" && computerHand == "rock") {
    setDecision("TIE");
  }
  if (userChoice == "scissors" && computerHand == "scissors") {
    setDecision("TIE");
  }
  if (userChoice == "scissors" && computerHand == "rock") {
    setDecision("YOU LOSE");
    setScore(SCORE - 1);
  }
  if (userChoice == "scissors" && computerHand == "paper") {
    setDecision("YOU WIN");
    setScore(SCORE + 1);
  }
}

const restartGame = () => {
  let results = document.querySelector(".results");
  results.style.display = "none";

  let img = document.querySelector(".images");
  img.style.display = "grid";
}

const setDecision = (midText) => {
  document.querySelector(".midText h1").innerText = midText;
}
const setScore = (scores) => {
  SCORE = scores;
  document.querySelector(".scores span").innerText = scores;
}
  




``