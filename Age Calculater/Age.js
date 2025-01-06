let userinput = document.querySelector(".date");
const calculatebtn = document.querySelector(".calculatebtn");
const result = document.querySelector(".result")

userinput.max = new Date().toISOString().split("T")[0];

function calculateage() {
    const birthDateObj = new Date(userinput.value);
    const today = new Date();

    let years = today.getFullYear() - birthDateObj.getFullYear();
    let months = today.getMonth() - birthDateObj.getMonth();
    let days = today.getDate() - birthDateObj.getDate();

    if (days < 0) {
        months--;
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInPrevMonth;
    }
    if (months < 0) {
        years--;
        months += 12;
    }

  showresults(days,months,years);
}

function showresults(d3,m3,y3){
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`
    result.className = "result"
}

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}

calculatebtn.addEventListener("click", calculateage);
