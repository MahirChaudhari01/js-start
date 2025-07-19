let userScore=0;
let compScore=0;

const choises=document.querySelectorAll(".choise");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame = () => {
    msg.innerText = "Game was draw!";
};

const genCompChoise = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin, userChoise, compChoise) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        
        msg.innerText = `you win ,${userChoise} beats ${compChoise}`;
        msg.style.backgroundColor = "green" ;
         }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            console.log("you lose!");
            msg.innerText = `you lose. ${compChoise} beats ${userChoise}`;
            msg.style.backgroundColor = "red";
        }
    
};


const playGame=(userChoise)=>{
    console.log("user choise=",userChoise);
    const compChoise=genCompChoise();
    console.log("comp choise=",compChoise);

    if(userChoise === compChoise){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoise === "rock"){
            userWin = compChoise === "paper" ? false : true;
        }else if(userChoise === "paper"){
            userWin = compChoise ==="scissors" ? false : true ;

        }else{
            userChoise = compChoise ==="rock" ? false : true ;
        }
        showWinner(userWin,userChoise,compChoise);
    }
    
};

choises.forEach((choise) =>{
    choise.addEventListener("click",() =>{
        const userChoise=choise.getAttribute("id");
        
        playGame(userChoise);    
    });
});