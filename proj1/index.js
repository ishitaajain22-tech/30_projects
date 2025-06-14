const API_KEY = '78add568e8436a735107f72b58f541cc';
let searchBox = document.querySelector('.search input')
let searchBtn = document.querySelector('.search button')
let weatherIcon = document.querySelector('.weather-icon')
let weather = document.querySelector('.weather')

async function checkWeather() {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=${API_KEY}`
    let response = await fetch(API_URL);
    let data = await response.json();

    console.log(data)

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block'
        weather.style.display = 'none';
    }else{
    document.querySelector('.city').innerText = data.name ; 
    document.querySelector('.temp').innerText = Math.round(data.main.temp -273) + '°C' ;
    document.querySelector('.humidity').innerText = data.main.humidity+'%';
    document.querySelector('.wind').innerText = data.wind.speed+ " km/hr";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = 'images/clouds.png';
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = 'images/clear.png';
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = 'images/drizzle.png';
    }else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = 'images/humidity.png';
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = 'images/mist.png';
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = 'images/rain.png';
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = 'images/snow.png';
    }
    weather.style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }

}

searchBtn.addEventListener('click',()=>{
    checkWeather();
})
