document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    var key = "5d04eaa8e329daf98c6da9c9c87a2b7f";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
        return resp.json()
    })
        .then(function (data){
            console.log(data);
            drawWeather(data);
        })
        .catch(function() {
        })

}

function cityWeather(e) {
    weatherDataFetch("Antsla");
}

function drawWeather(data) {
    var celsius = Math.round(parseFloat(data.main.temp)-273.15);
    var description =data.weather[0].description;

    document.querySelector("#description").innerHTML = description;
    document.querySelector("#temp").innerHTML = celsius + "&deg;";
    document.querySelector("#location").innerHTML = data.name;
}