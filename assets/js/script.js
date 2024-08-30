async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '6e816a3f3effbcc22f2a1bd427164889'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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