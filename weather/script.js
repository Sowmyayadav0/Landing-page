document.getElementById("location").addEventListener("change", async () => {
    // Get user-entered location
    const location = document.getElementById("location").value;
    const weatherData = await getWeatherData(location);
    displayWeatherData(weatherData);
});

const getWeatherData = async (location) => {
    if (!location) {
        return {};
    }

    const apiKey = "4ee79fea40bfe8c30fd9c85e5d580bf2";
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    if (!response.ok) {
        return { error: "Location not found or API error" };
    }

    const data = await response.json();
    return data;
};

// To change background color
function getBackgroundColor(temperature) {
    if (typeof temperature !== "number") {
        throw new Error("Temperature must be a number");
    }

    if (temperature <= 0) {
        return "blue"; // Cold temperatures
    } else if (temperature <= 20) {
        return "lightblue"; // Cool temperatures
    } else if (temperature <= 30) {
        return "orange"; // Warm temperatures
    } else {
        return "red"; // Hot temperatures
    }
}

//  to display  data
const displayWeatherData = (data) => {
    const weatherDataElement = document.getElementById("weather-data");

    if (Object.keys(data).length === 0 || data.error) {
        weatherDataElement.innerHTML = data.error || "Please enter a location to see the weather.";
    } else {
        const backgroundColor = getBackgroundColor(Math.floor(data.main.temp - 273.15));
        weatherDataElement.style.backgroundColor = backgroundColor;

        weatherDataElement.innerHTML = `
            <h3>${data.name}</h3>   
            <p>Temperature: ${Math.floor(data.main.temp - 273.15)}°C</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    }
};

window.onload = () => {
    document.getElementById("weather-data").innerHTML = "Enter a location to see the weather.";
};
