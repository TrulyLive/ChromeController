importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()


console.log("Establishing WebSocket CLIENT")
var ws = new WebSocket("ws://localhost:5051");

ws.addEventListener("open", function() {
  ws.send(JSON.stringify({
    "message": "CONNECT"
  }))
});

ws.addEventListener("message", function(data) {
    console.log('MESSAGE:')
    console.log(data.data);
    myTab.update({
        url: "http://www.example.com/"
    });
    myTab.
});
    