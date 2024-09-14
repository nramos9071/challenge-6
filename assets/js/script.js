const searchBtn = document.querySelector('#searchbtn');
const priorCity = document.querySelector('#priorcity');
let createBtn = document.createElement('button');
// let storedCity = document.querySelector('#saved-city')



async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '7a0fbe2742fb17dd43551428d82f00d1'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        document.getElementById('weather').innerText = error.message;
    }
}

async function getForecast() {
    const city = document.getElementById('city').value;
    const apiKey = '7a0fbe2742fb17dd43551428d82f00d1'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayForecast(data);
        console.log('working')
        
    } catch (error) {
        document.getElementById('weather').innerText = error.message;
    }
}

function displayForecast(data) {
    const forecastDay1Div = document.getElementById('day1');
    const forecastDay2Div = document.getElementById('day2');
    const forecastDay3Div = document.getElementById('day3');
    const forecastDay4Div = document.getElementById('day4');
    const forecastDay5Div = document.getElementById('day5');
    const { main, name, city, list, weather } = data;
    console.log(data);
    forecastDay1Div.innerHTML = `
        <h2> Tomorrow </h2>
        <p> Forecast: ${list[1].weather[0].description}</p>
        <p>Temperature: ${list[1].main.temp}°F</p>
        <p>Humidity: ${list[1].main.humidity}%</p>
    `;
    forecastDay2Div.innerHTML = `
        <h2> Next Day </h2>
        <p> Forecast: ${list[2].weather[0].description}</p>
        <p>Temperature: ${list[2].main.temp}°F</p>
        <p>Humidity: ${list[2].main.humidity}%</p>
    `;
    forecastDay3Div.innerHTML = `
        <h2> Day After </h2>
        <p> Forecast: ${list[3].weather[0].description}</p>
        <p>Temperature: ${list[3].main.temp}°F</p>
        <p>Humidity: ${list[3].main.humidity}%</p>
    `;
    forecastDay4Div.innerHTML = `
        <h2> ${list[4].dt_txt} </h2>
        <p> Forecast: ${list[4].weather[0].description}</p>
        <p>Temperature: ${list[4].main.temp}°F</p>
        <p>Humidity: ${list[4].main.humidity}%</p>
    `;
    forecastDay5Div.innerHTML = `
        <h2> ${list[5].dt_txt} </h2>
        <p> Forecast: ${list[5].weather[0].description}</p>
        <p>Temperature: ${list[5].main.temp}°F</p>
        <p>Humidity: ${list[5].main.humidity}%</p>
    `;


}

function displayWeather(data) {
    const weatherDiv = document.getElementById('current-city');
    const { main, name, weather } = data;
    console.log(data);
    weatherDiv.innerHTML = `
        <section id="currentweatherheader">
        <h2>Weather in ${name}</h2>
        </section>
        <section id="currentweatherinfo">
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°F</p>
        <p>Humidity: ${main.humidity}%</p>
        </section>
    `;
    function saveCity() {

        let jsonCity = JSON.stringify(name);

        localStorage.setItem('city', jsonCity);

        console.log(localStorage);

    

        
     };

    function createButtons() {

        let savedCity = JSON.parse(localStorage.getItem('city'));

        priorCity.innerHTML = `<button id="saved-city">${savedCity}</button>`}

    
    saveCity();
    createButtons();

   
};



searchBtn.addEventListener('click', function() {

    document.querySelector('#sunrisepic').setAttribute('style','display:none');
    document.querySelector('#currentcitycontainer').setAttribute('style', 'display:flex')  
    document.querySelector('#forecastcontainer').setAttribute('style', 'display:flex') 
    getWeather();
    getForecast();
   
});



