const apikey = "30b9c8971ed8ee0d5526d9227429d3d4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search-bar");
const searchbtn = document.querySelector(".search-btn");
const weathericon = document.querySelector(".weather-icon");




function valuechange(data){
    document.querySelector(".temp").innerText = Math.round(data.main.temp)+ "°C";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity+ "%";
    document.querySelector(".wind").innerText = data.wind.speed+ "km/s";
};




window.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    searchbtn.click(); 

  }

});


function imagechange(data){
        const weather = data.weather[0].main;
        if(weather === "Clear"){
            weathericon.src= "images/clear.png";
        }
        else if(weather ==="Clouds"){
            weathericon.src = "images/clouds.png";
        }
        else if(weather === "Drizzle"){
            weathericon.src = "images/drizzle.png";
        }
        else if(weather === "Mist"){
            weathericon.src = "images/mist.png";
        }
        else if(weather=== "Rain"){
            weathericon.src = "images/rain.png";
        }
        else if(weather === "Snow"){
            weathericon.src = "images/snow.png";
        }
};



async function checkweather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);
    console.log("Hello world2")
    var data = await response.json();
    console.log(data);

    valuechange(data);
    imagechange(data);
};



searchbtn.addEventListener("click",()=>{
        checkweather(searchbox.value);
        console.log("Hello world")
});