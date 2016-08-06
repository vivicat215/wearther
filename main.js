// sample url
// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric

function wearther() {
    var appid = "8cc7b8faeb263abf8ba6979a7d6edbbb";
    var temp, humidity, wind, location, description, icon;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city").value+"&units=imperial&appid="+appid;
    var weather = {};
    var xhttp = new XMLHttpRequest(); // execute when async is ture/readyState changes, readyState holds the status of the XMLHttpRequest
    xhttp.onreadystatechange = function() { // will be called once the server response
        if (xhttp.readyState == 4 && xhttp.status == 200) { //response is ready
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
                document.getElementById("hometext").innerHTML = "It's winter time! Here is some dressing tips for you!";
                document.getElementById("homeimg").src = "http://i.imgur.com/7U6NkTm.gif";
                document.getElementById("hometemptext").innerHTML = "While we'd all love to stay indoors, drink hot chocolate, and choose a new show to binge watch, there comes a point when the music has to be faced. Whether it's layering tights under jeans, rocking a white button-down under a gorgeous sweater, or finding a coat with a hood to protect your ears, lots of fashionable tricks exist to let you still see the light of day despite the cold. So what items will you need? Tights are the answer to quite a few of your windy weather woes. If you're wearing pants or jeans out, slip a pair on underneath, and no one will be any the wiser. If you're going with a skirt, tights are a great way to protect your legs during the cold.";
                document.getElementById("hometempimg").src = "http://i.imgur.com/EKFqDVl.jpg";
            } else if (weather.temp > 35 && weather.temp <= 65) {
                document.getElementById("hometext").innerHTML = "It's the best season of the year! Here is some dressing tips for you!";
                document.getElementById("homeimg").src = "http://i.imgur.com/1U2SFi6.gif";
                document.getElementById("hometemptext").innerHTML = "It's most like spring or fall seasons now. Dress youself for the season by adding color and life back into your wardrobe. However, the weather is still characterized by quickly changing temperatures, so be ready for whatever nature throws your way. Always bring a sweater, cardigan, light jacket, or pair of leggings handy -- it is always easy to take off layers if you get hot.";
                document.getElementById("hometempimg").src = "http://i.imgur.com/yGV1Axq.jpg";
            } else if (weather.temp > 65 && weather.temp < 100) {
                document.getElementById("hometext").innerHTML = "It's summer time! Here is some dressing tips for you!";
                document.getElementById("homeimg").src = "https://media.giphy.com/media/Ah9qlSAxybRXW/giphy.gif";
                document.getElementById("hometemptext").innerHTML = "The sun is out, temperature is up, and you're left wondering how to dress and keep looking up. When it's under 65 &degF, you can have a lot of fun with layers, but now, wearing more than one layer can have you sweat like a roasted pig. You want to dress well, but also comfortable. You don't need multiple layers to look your best. You can look great wearing just a single layer.";
                document.getElementById("hometempimg").src = "http://i.imgur.com/KCgBfjD.jpg";
            } else if (weather.temp > 100) {
                document.getElementById("hometext").innerHTML = "It's hell! Stay home if you can!";
                document.getElementById("homeimg").src = "http://i.imgur.com/cl5d5x6.gif";
                document.getElementById("hometemptext").innerHTML = "It's a scorcher! With temperatures climbing to an unbearable boiling point across the nation, even surpassing 105 &degF for some, we're doing everything we can to cool off. Since we can't stick ice cubes in our braids during work hours, we're making smart sartorial choices our other go-to. Get on board by: (1) Looking for breathable fabrics, like cotton or linen, that won't cling; (2) Going sleeveless whenever you can to avoid sweat stains; and (3) Opting for light colors (think: white and pastels) because they reflect light. Darker hues tend to absorb the most heat. With that said, we rounded up 11 fashion finds to melt-proof your look, and keep you looking fresh despite a heat wave.";
                document.getElementById("hometempimg").src = "http://i.imgur.com/oGABZBm.jpg";
            } else if (weather.temp < 0) {
                document.getElementById("hometext").innerHTML = "Stay home if you don't want your toes to be bitten off!";
                document.getElementById("homeimg").src = "http://cdn.ebaumsworld.com/mediaFiles/picture/1907719/81855188.jpg";
                document.getElementById("hometemptext").innerHTML = "A temperature of 0 &degF and a wind speed of 15 mph creates a wind chill temperature of -19 &degF. Under these conditions frost bite can occur in just 30 minutes. So it's better to just stay home if you'd like your toes to not get bitten off.";
                document.getElementById("hometempimg").src = "http://i.imgur.com/aO84tAh.jpg";
            }
        }
    };
    // send request to server
    xhttp.open("GET", url, true); // specifies the type of request .open(method'type of request', url, async)
    xhttp.send(); 
};


