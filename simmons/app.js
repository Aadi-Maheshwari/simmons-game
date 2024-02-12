let gamesequence = [];
let usersequence = [];

let started = false;
let level = 0;

let btns = ["box1","box2","box3","box4"];

let h3 = document.querySelector(".heading");
document.addEventListener("click",()=>{
  // console.log("game started");
  if(started === false){
    started = true;
    levelup();
    
  }
});

function levelup(){
  usersequence = [];
  level++; 
  h3.innerText = `Level ${level}`;
  // random btn choose 
  let randind = Math.floor(Math.random() * 3);
  let randbox = btns[randind];
  let randbtn = document.querySelector(`.${randbox}`);
  
  gamesequence.push(randbox);
  // console.log(gamesequence);
  gameFlash(randbtn);
};
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 250);

}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 250);

}

function checkAns(idx){
  // console.log("curr level :", level);
  // let idx = level - 1;
  if(usersequence[idx] === gamesequence[idx]){
    // level++;
    // console.log("gya");
    if(usersequence.length == gamesequence.length){
    
      setTimeout(levelup,1000);
    }
  }
  else{
    h3.innerHTML = `GAME OVER! Your Score was <b>${level}</b> <br> Click on screen to start the game.`;
    // document.querySelector("body").style.backgroundColor = "red";
    // setTimeout(function(){
    //   document.querySelector("body").style.backgroundColor = "red";
    // } , 150);
  
   setTimeout(reset , 1000);
  }
}



function btnpress(){
  // console.log(this);
  let btn = this;
  userFlash(btn);
  usercolor = btn.getAttribute("id");
  console.log (usercolor);
  usersequence.push(usercolor);
  checkAns(usersequence.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
  btn.addEventListener("click" ,btnpress);
}

function reset(){
  started = false;
  gamesequence = [];
  usersequence = [];
  level = 0;
}