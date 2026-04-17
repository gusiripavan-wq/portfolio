function getWeather() {
    const city = document.getElementById("cityInput").value;

    const apiKey = "2a0d87abb91d7cafc7e1f9b4976f551e";

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

console.log(data);

self.addEventListener('install', e => {
  console.log("Installed");
});
self.addEventListener('fetch', e => {});

function openWeather() {
  document.getElementById("weather").scrollIntoView({
    behavior: "smooth"
  });
}
function openWeatherApp() {
    window.open("https://gusiripavan-wq.github.io/weather-app/", "_blank");
}

