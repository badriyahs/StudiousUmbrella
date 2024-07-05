const API_KEY = config.WEATHER_API_KEY;

function getWeatherData() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=10128&APPID=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data));
}

getWeatherData()