// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=2805a33c5f4026d9721606ccb064c6c5&units=metric


const apiKey = "2805a33c5f4026d9721606ccb064c6c5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const cityName = document.querySelector(".search");
const searchBtn = document.querySelector(".search-icon");
const weatherIcon = document.querySelector(".Weather img");


  
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".Weather").style.display = "none";
    }
    else
    {
        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".air-speed").innerHTML = data.wind.speed;
    document.querySelector(".air-humidity").innerHTML = data.main.humidity + " %";

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main = "Clear")
    {
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main = "Rain")
    {
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main = "Drizzle")
    {
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main = "Mist")
    {
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main = "Snow")
    {
        weatherIcon.src = "images/snow.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
});

cityName.addEventListener("keypress", (event) => {
    if(event.key === "Enter")
    {
        checkWeather(cityName.value);
    }
});