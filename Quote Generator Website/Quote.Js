const newquote = document.querySelector(".new-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweet = document.querySelector(".tweet");


async function getquote(){
    const apiurl = "https://api.quotable.io/random";

    const response = await fetch(apiurl);
    var data = await response.json();
    display(data);
}

function display(data){
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweetnow(){
    dayquote = quote.innerText;
    authorname = author.innerText;
    window.open(`https://twitter.com/intent/tweet?text=${dayquote}`+"----by: "+authorname);
}

tweet.addEventListener("click",tweetnow);
getquote();
newquote.addEventListener("click",getquote);