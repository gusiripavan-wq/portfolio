function getWeather() {
    const city = document.getElementById("cityInput").value;

    const apiKey = "YOUR_API_KEY_HERE";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML =
                    "🌡 Temperature: " + data.main.temp + "°C<br>" +
                    "🌥 Weather: " + data.weather[0].description;
            } else {
                document.getElementById("weatherResult").innerHTML =
                    "❌ City not found";
            }
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
