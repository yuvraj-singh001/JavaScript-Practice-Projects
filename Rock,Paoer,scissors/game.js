let userscore = 0;
let compscoer = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcont = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#userscore");
const computerscorepara = document.querySelector("#computerscore");

const generatecomputerchoice = ()=>{
    let options = ["rock" , "paper" , "scissors"];
    let randomindx = Math.floor(Math.random()*3);
    return options[randomindx];
};

const drawgame = () => {
    msg.innerText = "Game was a draw , Play again";
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win, ${userchoice} beats ${compchoice}`;
        msg.style.backgroungColor = "green";
    }
    else{
        compscoer++;
        computerscorepara.innerText = compscoer;
        msg.innerText = `You lose, ${compchoice} beats ${userchoice}`;
        msg.style.backgroungColor = "red";
    }
}

const playgame = (userchoice) => {
    // console.log("userchoice = ", userchoice);
    const compchoice = generatecomputerchoice();
    // console.log(compchoice);
    if(userchoice===compchoice)
    {
        console.log(drawgame());
    }
    else{
        let userwin = true;
        if(userchoice== "rock")
        {
            userwin = compchoice==="paper"?false : true;
        }
        else if(userchoice==="paper")
        {
            userwin= compchoice==="scissor"?false : true;
        }
        else 
        {
            userwin= compchoice==="rock"?false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choice.forEach((choice) => {

    choice.addEventListener("click",() => {
        const userchoice= choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    })
});