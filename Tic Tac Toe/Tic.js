let btn = document.querySelectorAll(".b");
let reset = document.querySelector(".reset");
let mainmsg = document.querySelector(".winning");
let msg = document.querySelector(".msg");

let turn0=true;

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


btn.forEach(
    (b)=>{
        b.addEventListener("click",() => {
            if(turn0)
            {
                b.innerText="o"
                turn0=false;
            }
            else
            {
                b.innerText="x";
                turn0=true;
            }
            b.disabled=true;
            checkwinner();
        });
    }
)

const disableboxes = () => {
    for(let box of btn)
    {
        box.disabled= true;
    }
}

const enableboxes = () => {
    for(let box of btn)
    {
        box.disabled= false;
        box.innerText= "";
        
    }
}

const showwinner = (winner)=>{
    msg.innerText = `conguratulations , winner is ${winner}`;
    mainmsg.classList.remove("hide");
    disableboxes();
}

const checkwinner = ()=> {
    for(let pattern of win)
    {
        let p1 = btn[pattern[0]].innerText;
        let p2 = btn[pattern[1]].innerText;
        let p3 = btn[pattern[2]].innerText;
        if(p1!=""&&p2!=""&&p3!="")
        {
            if(p1===p2&&p2===p3)
            {
                showwinner(p1);
            }
        }
    }
}

const resetgame = () =>{
 turn0 = true;
 enableboxes();
 mainmsg.classList.add("hide");
}


reset.addEventListener("click", resetgame);