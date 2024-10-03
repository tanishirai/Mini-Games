let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice= () =>{
    const options=["rock", "paper", "scissors"];
    const randInd=Math.floor(Math.random() *3);
    return options[randInd];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
    
    msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";
    }
}

const playGame= (userChoice) =>{
    //console.log("User Choice= ",userChoice);
    const compChoice=genCompChoice();
    //console.log("Computer Choice= ",compChoice);

    if (userChoice ===compChoice) {
        //Draw
        msg.innerText="Game Draw. Play Again";
        msg.style.backgroundColor="#081b31";
    }
    else{
        let userWin =true;
        if (userChoice ==="rock") {
            userWin=compChoice ==="paper" ? false : true;
        }
        else if (userChoice==="paper") {
            userWin=compChoice=== "scissors" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false :true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});