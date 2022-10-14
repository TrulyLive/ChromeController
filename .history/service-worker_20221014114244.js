importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()


console.log("Establishing WebSocket CLIENT")
var pubGateWs = new WebSocket("ws://localhost:5051");

pubGateWs.addEventListener("open", function() {
  pubGateWs.send(JSON.stringify({
    "message": "CONNECT"
  }))
});

ws.on('message', function message(data) {
    console.log(`Round-trip time: ${Date.now() - data} ms`);
  
    setTimeout(function timeout() {
      ws.send(Date.now());
    }, 500);
  });