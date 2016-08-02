var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=8cc7b8faeb263abf8ba6979a7d6edbbb&units=metric";

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() { // execute when async is true/readyState changes, readyState holds the status of XMLHttpRequest)
    if (xhttp.readyState == 4 && xhttp.status == 200) { //response is ready
     document.getElementById("demo").innerHTML = xhttp.responseText; //getting the response data as a string/ if responseXML = XML data
    }
  };
  xhttp.open("GET", url, true); // specifies the type of request .open(method'type of request', url, async)
  xhttp.send(); // send request to server send()-used for GET, send(string)-used for POST
}

/*

*onreadystatechange - Stores a function (or the name of a function) to be called automatically each time the readyState property changes

*readyState - Holds the status of the XMLHttpRequest. Changes from 0 to 4: 
0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready
Note: The onreadystatechange event is triggered five times (0-4), one time for each change in readyState.

*status-
200: "OK"
404: Page not found

*callback function: 
If you have more than one AJAX task on your website, you should create ONE standard function for creating the XMLHttpRequest object, and call this for each AJAX task.
The function call should contain the URL and what to do on onreadystatechange (which is probably different for each call):

Example:

html:
<button type="button"
onclick="loadDoc('ajax_info.txt', myFunction)">Change Content
</button>

script: 
function loadDoc(url, cfunc) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            cfunc(xhttp);
        }
    };
xhttp.open("GET", url, true);
xhttp.send();
}

function myFunction(xhttp) {
  document.getElementById("demo").innerHTML = xhttp.responseText;
}

*/ 
