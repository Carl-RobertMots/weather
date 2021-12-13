document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    var key = "5d04eaa8e329daf98c6da9c9c87a2b7f";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
        return resp.json()
    })
        .then(function (data){
            console.log(data);
        })
        .catch(function() {
        })

}

function cityWeather(e) {
    weatherDataFetch("Tallinn");
}