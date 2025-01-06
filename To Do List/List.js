const inputbox = document.querySelector('.input-box');
const addBtn = document.querySelector('.btn');
const listcontainer = document.querySelector('.list-container');


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      addBtn.click(); 
    }
  });

function addtask(){
    if(inputbox.value == ""){
        alert('Please enter a task');
    }
    else{
        const task = document.createElement("li");
        task.innerText= inputbox.value;
        listcontainer.appendChild(task);
        inputbox.value ="";
        const deletebtn = document.createElement("span");
        task.appendChild(deletebtn);
        deletebtn.innerText ="\u00d7"
        savedata();
    }
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        savedata();
    }
},false)


function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showtask(){
    listcontainer.innerHTML= localStorage.getItem("data");
}

showtask()