
function getWeather() {
    const city = document.getElementById("clityInput").value;

    const apiKey = "your_real_api_key_here"; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("weatherResult").innerHTML =
                "Temperature: " + data.main.temp + "°C";
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
