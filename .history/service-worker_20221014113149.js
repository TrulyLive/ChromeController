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
