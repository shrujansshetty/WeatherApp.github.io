document.getElementById('fetchWeather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'bdf23e6aa12d4a449a2162725242907';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    if (data.error) {
        weatherData.innerHTML = `<p>${data.error.message}. Please try again.</p>`;
    } else {
        const { location, current } = data;
        const { name, country } = location;
        const { temp_c, condition, humidity } = current;

        weatherData.innerHTML = `
            <h2>Weather in ${name}, ${country}</h2>
            <p><strong>Temperature:</strong> ${temp_c}°C</p>
            <p><strong>Condition:</strong> ${condition.text}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
        `;
    }
}
