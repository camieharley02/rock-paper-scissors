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
}
const userMove = (hand) => {
  console.log(hand);
// hide current page
  let images = document.querySelector(".images");
  images.style.display = "none";
  // show second page
  let results = document.querySelector(".results")
  results.style.display = "flex"

  // displays user choice
  document.getElementById("userChoice").src = options[hand];
   
  let computerHand = computerMove();
  midButton(userChoice, computerHand);

}

const computerMove = () => {
  let hand = ["rock", "paper", "scissors", "lizard", "spock"]
  let computerHand = hand[Math.floor(Math.random() * 5)]

  document.getElementById("computerChoice").src = options[computerHand];

  return computerHand;
}


 let SCORE = 0;

const midButton = (userChoice, computerHand)=>{
  if (userChoice === "scissors" && computerHand === "paper"){
    setDecision("YOU WIN");
  } else if (userChoice === "scissors" && computerMove === "rock") {
    setDecision("YOU LOSE");
  } else if (userChoice === "scissors" && computerMove === "scissors") {
    setDecision("TIE");
  }

  if (userChoice === "rock" && computerHand === "paper"){
    setDecision("YOU LOSE");
  } else if (userChoice === "rock" && computerMove === "rock") {
    setDecision("TIE");
  } else if (userChoice === "rock" && computerMove === "scissors") {
    setDecision("YOU WIN");
  }

  if (userChoice === "paper" && computerHand === "paper"){
    setDecision("TIE");
  } else if (userChoice === "paper" && computerMove === "rock") {
    setDecision("YOU WIN");
  } else if (userChoice === "paper" && computerMove === "scissors") {
    setDecision("YOU LOSE");
  }
}
const setDecision = (decision) => {
  
}
const setScore = (score) => {
  if (result === "YOU WIN") {
    score.wins += 1;
  } else if (result === "YOU LOSE") {
    score.losses -= 1;
  } else if (result === "TIE") {
    score.ties += 1;
  }
}
  




