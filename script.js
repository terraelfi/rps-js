function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum <= 0.33) {
        return "Rock";
    } else if (randomNum <= 0.66) {
        return "Paper";
    } else {
        return "Scissor";
    }
};

function getHumanChoice() {
    let playerChoice
    
    while (true) {
        playerChoice = prompt("Please type between ROCK, PAPER OR SCISSOR").toUpperCase();

        if (playerChoice === "ROCK") {
            return "Rock";
        } else if (playerChoice === "PAPER") {
            return "Paper";
        } else if (playerChoice === "SCISSOR") {
            return "Scissor"
        } else {
            alert("Invalid input. Please type Rock, Paper, or Scissor.");
            return getHumanChoice();
        }
    }
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "DRAW!"
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        return "CPU Wins! Because Paper beats Rock"
    } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
        return "Player Wins! Because Rock beats Scissor"
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        return "Player Wins! Because Scissor beats Paper"
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        return "CPU Wins! Because Rock beats Scissor"
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "Player Wins! Because Paper beats Rock"
    } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
        return "CPU Wins! Because Scissor beats Paper"
    }
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameRounds = 0;

    for (gameRounds = 1; gameRounds <=5; gameRounds++) {
        console.log(`Round ${gameRounds}`);
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        console.log(result);

        // includes = find exact string of that
        if (result.includes('Player Wins!')) {
            humanScore++;
        } else if (result.includes('CPU Wins!')) {
            computerScore++;
        }

        console.log("Player picked: "+ humanChoice + 
        "\nCPU picked: " + computerChoice + 
        "\n=============" +
        "\nHuman Score: " + humanScore +
        "\nCPU Score: " + computerScore);
    }

    if (humanScore > computerScore){
            console.log(`😃 YOU WIN! \nFINAL SCORE: HUMAN:${humanScore} - CPU:${computerScore}`)
        } else if (computerScore > humanScore) {
            console.log(`🤖 COMPUTER WIN! \nFINAL SCORE: HUMAN:${humanScore} - CPU:${computerScore}`)
        } else {
            console.log(`😮‍💨 DRAW! \nFINAL SCORE: HUMAN:${humanScore} - CPU:${computerScore}`)
        }

}

playGame();