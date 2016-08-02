// sample url
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric

function wearther() {
    var appid = "8cc7b8faeb263abf8ba6979a7d6edbbb";
    var temp, humidity, wind, location, description, icon;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city").value+"&units=imperial&appid="+appid;
    var weather = {};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            var weather = {};
            weather.description = data.weather[0].main;
            weather.temp = data.main.temp;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.location = data.name + ", " + data.sys.country;
            weather.code = data.weather[0].id;
            document.getElementById("temp").innerHTML = weather.temp;
            document.getElementById("description").innerHTML = weather.description;
            document.getElementById("humidity").innerHTML = weather.humidity;
            document.getElementById("wind").innerHTML = weather.wind;
            document.getElementById("location").innerHTML = weather.location;
            document.getElementById("icon").src = "imgs/codes/" + weather.code + ".png";

            // change the picture and text on home page according to the temperature in users cities
            
            if (weather.temp > 0 && weather.temp <= 35) {
                document.getElementById("hometext").innerHTML = "It's winter time! Go to Temperature for more!";
                // document.getElementById("homeimg").src = "http://www.lovethispic.com/uploaded_images/210264-Hello-Winter-With-Snow-And-Lights.jpg";
                document.getElementById("homeimg").src = "http://i.imgur.com/7U6NkTm.gif";
            } else if (weather.temp > 35 && weather.temp <= 65) {
                document.getElementById("hometext").innerHTML = "It's the best season of the year! Go to Temperature for more!";
                // document.getElementById("homeimg").src = "http://www.relatably.com/m/img/excited-animal-memes/Happy-Animal-Meme-08.jpg";
                document.getElementById("homeimg").src = "http://i.imgur.com/1U2SFi6.gif";
            } else if (weather.temp > 65 && weather.temp < 100) {
                document.getElementById("hometext").innerHTML = "It's summer time! Go to Temperature for more!";
                // document.getElementById("homeimg").src = "http://i.imgur.com/QVhFwIF.png";
                document.getElementById("homeimg").src = "https://media.giphy.com/media/Ah9qlSAxybRXW/giphy.gif"

            } else if (weather.temp > 100) {
                document.getElementById("hometext").innerHTML = "It's hell! Stay home or go to temperature for more.";
                // document.getElementById("homeimg").src = "https://media.giphy.com/media/3oEduVObV0nnnTSDCg/giphy.gif";
                document.getElementById("homeimg").src = "http://i.imgur.com/cl5d5x6.gif";
            } else if (weather.temp < 0) {
                document.getElementById("hometext").innerHTML = "Stay home if you don't want your toes to be bitten off!";
                document.getElementById("homeimg").src = "http://cdn.ebaumsworld.com/mediaFiles/picture/1907719/81855188.jpg";
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
};



// var load = function (element) {
//     temp = document.getElementById("temperature");
//     location = document.getElementById("location");
//     icon = document.getElementById("icon");
//     humidity = document.getElementById("humidity");
//     wind = document.getElementById("wind");
//     description = document.getElementById("description");
// }

// function update(weather) {
//     wind.innerHTML = weather.wind;
//     direction.innerHTML = weather.direction;
//     humidity.innerHTML = weather.humidity;
//     location.innerHTML = weather.location;
//     temp.innerHTML = weather.temp;
//     icon.src = "imgs/codes/" + weather.icon + ".png"; 
// }
