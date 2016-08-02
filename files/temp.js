var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric';

// function setup() {
// 	loadJSON(url, gotData);
// }

// function gotData(data) {
// 	println(data);
// }

// function newDoc() {
// 	window.location.assign(url)
// }

// function try() {
// 	alert('It works'); 
// };

document.getElementById("demo").innerHTML =
"Page hostname is: " + window.location.href;




/*
var weather;

var url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric';

function setup() {
	createCanvas(400, 200);
	loadJSON(url, gotData)
}

function gotData(data) {
	// println(data);
	// weather = data;
	weather = data;
}

function draw() {
	background(0); 
	if (weather) {
		var temp = weather.main.temp;
		var humidity = weather.main.humidity;
	}
}
*/

 // test works!
// var text = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';

// var obj = JSON.parse(text);

// document.getElementById("demo").innerHTML = obj.name + "<br>" + obj.street + "<br>" + obj.phone; 



// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// var obj = JSON.parse(text);

// document.getElementById("demo").innerHTML = obj.employees[1].firstName + " " + obj.employees[1].lastName;



// function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//         out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
//     }
//     document.getElementById("id01").innerHTML = out;
// };

// var xmlhttp = new XMLHttpRequest();
// var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric";

// xmlhttp.onreadystatechange = function() {
// if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//     var myArr = JSON.parse(xmlhttp.responseText);
//     myFunction(myArr);
//     }
// };

// xmlhttp.open("GET", url, true);
// xmlhttp.send();




var xmlhttp = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td>" +
        arr[i].main.temp +
        "</td><td>" +
        arr[i].main.pressure +
        "</td><td>" +
        arr[i].main.humidity +
        "</td></tr>";
    }
    out += "</table>";
    document.getElementById("id01").innerHTML = out;
}



