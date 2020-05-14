//game function
const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    const startGame = () => {

        const playBtn = document.querySelector(".intro button");
        const intro = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            intro.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            //reset to rock??
            });
        });

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
            //computer's choice
            const computerNumber = Math.floor(Math.random()* 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000)

            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
            });   
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        //update score ++
        //change text
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
          }
          //Check for Rock
          if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              return;
            }
          }
          //Check for Paper
          if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              return;
            }
          }
          //Check for Scissors
          if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
              winner.textContent = "Computer Wins";
              cScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player Wins";
              pScore++;
              updateScore();
              return;
            }
          }
    };
    //call inner functions
    startGame();
    playMatch();
   
};

game();
    
            //update image
                //playerHand.src = '${this.textContent}.png';
                //computerHand.src = '${conputerChoice}.png';

            //call compareHands
            //compareHands(this.textContent, computerChoice);

        //update score
            //playerScore.textContent = pScore;
            //computerScore.textContent = cScore;
        //compare playerChoice & computerChoice (if/else)
            //end each if/else with  return
            // update score pScore cScore++
            //call update score function

            //add animations by .style
            //loop eventlistener animationend

    //call inner functions

//call functions

