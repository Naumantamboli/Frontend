let gameSeq=[];
let userSeq=[];
let btns =["yellow","red","blue","green"];

let started = false;
let level = 0;
let buttons = document.querySelectorAll(".btn");
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // h2.innerText = "Game Started";
    if(started == false){
        started = true;
        levelUp();
    }
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },300)
}
 
function cheakAns(idx){
    // console.log("Current level :",level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! Your score was: <b>${level}</b><br> press any key to start`;
        setTimeout(function(){
            document.querySelector("body").style.color = "red";
            // document.querySelector("body").style.audio = "";
        },150)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    cheakAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
 
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}