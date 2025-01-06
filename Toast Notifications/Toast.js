// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
const toastbox = document.querySelector(".toast-box");


let successmsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';


function showtoast(m){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = m;
    toastbox.appendChild(toast);

    if(m.includes('error'))
    {
        toast.classList.add("error");
    }
    if(m.includes('Invalid'))
    {
        toast.classList.add("invalid");
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}

