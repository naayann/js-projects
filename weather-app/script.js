const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const apiKey = "b92de63d0e359ec6b953e6bc659947f8";

async function checkWeather() {
    const city = searchBox.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "/weather-app/images/clouds.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "/weather-app/images/clear.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "/weather-app/images/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/weather-app/images/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "/weather-app/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkWeather()
})