onst apiKey = 'YOUR_API_KEY_HERE';

function getWeather() {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetch(https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                alert('Error fetching weather data. Please try again.');
                console.error('Error:', error);
            });
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const city = document.getElementById('city');
    const description = document.getElementById('description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    city.textContent = data.name;
    description.textContent = Weather: ${data.weather[0].description};
    temperature.textContent = Temperature: ${data.main.temp}°C;
    humidity.textContent = Humidity: ${data.main.humidity}%;
    windSpeed.textContent = Wind Speed: ${data.wind.speed} m/s;

    weatherResult.style.display = 'block';
}