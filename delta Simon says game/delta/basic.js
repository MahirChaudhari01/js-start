let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}


function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    gameFlash(randBtn);

}

function checkAns(idx){
 
    console.log("answer chaecking done");
    if(userSeq[idx] === gameSeq[idx] ){
       if( userSeq.length === gameSeq.length) {
        setTimeout(levelUp,1000);
        
       } 
    }else{
        h2.innerHTML = `game over !  your score was <b> ${level} </b> <br> press any key to start. `; 
        
        document.body.classList.add("wrong");
        setTimeout(()=>{
            document.body.classList.remove("wrong")
        },500);

        reset();             
    } 
};

function btnPress() {
    let btn = this;
    userFlash(btn)
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false ;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



