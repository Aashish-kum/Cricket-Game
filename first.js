// var userScore = 0;
// var compScore = 0;
// var Tie = 0;
let Scorestr = localStorage.getItem('Score');
let Score = JSON.parse(Scorestr) || {
        userScore: 0,
        compScore: 0,
        Tie: 0,

    }
// if (Scorestr !== undefined) {
//     Score = JSON.parse(Scorestr);
// } else {
//    let Score = {
//         userScore: 0,
//         compScore: 0,
//         Tie: 0,

//     }
//};
Score.displayScore = function () {
    return `Win: ${Score.userScore} loss: ${Score.compScore} Tie: ${Score.Tie}`
};
function generateComputerchoice() {
    // const userChoiceMsg = 'you have choice Bat';
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber > 0 && randomNumber <= 1) {
        return "Bat";
        // console.log('computer choice Bat');
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return "Ball";
        // console.log('computer choice Ball');
    } else {
        return "Stump";
        // console.log('computer choice Stump');
    }
}

function getresult(userChoice, computerMove) {
    if (userChoice === "Bat") {
        if (computerMove === "Ball") {
            // console.log('You Win.');
            // userScore++;
            Score.userScore++;
            return "you Win.";
        } else if (computerMove === "Bat") {
            // console.log('Game is ti(Drow).');
            // Tie++;
            Score.Tie++;
            return "Game is Tie(Draw)";
        } else {
            // console.log('You Loss.');
            // compScore++;
            Score.compScore++;
            return "Computer Win.";
        }
    } else if (userChoice === "Ball") {
        if (computerMove === "Ball") {
            // console.log('You Win.');
            // Tie++;
            Score.Tie++;
            return "Game is Tie(Draw).";
        } else if (computerMove === "Bat") {
            // console.log('Game is ti(Drow).');
            // compScore++;
            Score.compScore++;
            return "Computer Win.";
        } else {
            // console.log('You Loss.');
            // userScore++;
            Score.userScore++;
            return "You Win.";
        }
    }
    //   else if (userChoice === 'Reset'){

    //      Score.userScore = 0;
    //      Score.compScore = 0;
    //      Score.Tie =0;
    // //     if (computerMove === "Ball") {
    // //         // console.log('You Win.');
    // //         // compScore++;
    // //         Score.compScore = 0;
    // //         return "Computer Win.";
    // //     } else if (computerMove === "Bat") {
    // //         // console.log('Game is ti(Drow).');
    // //         // userScore++;
    // //         Score.userScore = 0;
    // //         return "You Win.";
    // //     } else {
    // //         // console.log('You Loss.');
    // //         // Tie++;
    // //         Score.Tie =0;
    // //         return "Game is Tie(Draw).";
    // //     }

    //  }
    else {
        if (computerMove === "Ball") {
            // console.log('You Win.');
            // compScore++;
            Score.compScore++;
            return "Computer Win.";
        } else if (computerMove === "Bat") {
            // console.log('Game is ti(Drow).');
            // userScore++;
            Score.userScore++;
            return "You Win.";
        } else {
            // console.log('You Loss.');
            // Tie++;
            Score.Tie++;
            return "Game is Tie(Draw).";
        }
    }
}

function resetBut (userChoice){
    if (userChoice === 'Reset'){
        localStorage.clear();
        Score.userScore = 0;
        Score.compScore= 0;
        Score.Tie= 0;
    }
};

function showResult(userChoice, computerMove, result) {
    localStorage.setItem('Score', JSON.stringify(Score));
    alert(`you have choice ${userChoice}. computer choice is ${computerMove} 
        
${result}
        
${Score.displayScore()}`);
}

document.querySelector('#user').innerText = Score.userScore;
document.querySelector('#comp').innerText = Score.compScore;
document.querySelector('#tie').innerText = Score.Tie;
