document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById("but");
    var req = new XMLHttpRequest();
    var div = document.getElementById("wheater-name");
    let temp = document.getElementById("weather-temp");
    let wind = document.getElementById("wi");
    let humidity = document.getElementById("hu");

    button.addEventListener('click', function (event) {
        event.preventDefault();

        var input = document.getElementById("pass").value;
        var apiKey = 'b34fddd3dae4a2eb0ad363b62f98ba1e';

        if (input) {
            var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&APPID=' + apiKey;

            req.open('GET', url);
            req.send();

            req.onload = function () {
                if (req.status === 200) {
                    var data = JSON.parse(req.responseText);
                    console.log(data);
                    div.textContent = data.name;
                    temp.textContent = data.main.temp + '°C';
                    wind.textContent = data.wind.speed + 'km/h';
                    humidity.textContent =data.main.humidity + ' %';

                   
                } else if (req.status === 404) {
                    div.textContent = 'City not found or there was an error.';
                }
            };
        } else {
            div.textContent = 'Please enter a city name.';
        }
    });
});
