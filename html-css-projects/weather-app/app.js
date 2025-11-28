const API_KEY = "40e52e8d6f25";

async function getWeatherData() {
  //   const city = document.getElementById("cityInput").value;
  const city = "London";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(url);
    const weatherData = await response.json();

    console.log("weatherData: ", weatherData);
    // Displaying Data in UI
    document.getElementById("cityName").textContent = weatherData.name;
    document.getElementById("weatherMain").textContent =
      weatherData.weather[0].description;

    document.getElementById("latitude").textContent = weatherData.coord.lat;
    document.getElementById("longitude").textContent = weatherData.coord.lon;

    document.getElementById("humidity").textContent =
      weatherData.main.humidity + " %";
    document.getElementById("windSpeed").textContent =
      weatherData.wind.speed + " m/s";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

document.addEventListener("DOMContentLoaded", getWeatherData);

// document.getElementById("searchBtn").addEventListener("click", getWeatherData);

// Implement pending features
// 1. Add Validation for empty input
// 2. Show Weather Card when data is available
// 3. Add Weather Icon according to weather
