importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()


var pubGateWs = new WebSocket("wss://fx-ws.gateio.ws/v4/ws/btc");

pubGateWs.addEventListener("open", function() {
  pubGateWs.send(JSON.stringify({
    "time": 123456,
    "channel": "futures.tickers",
    "event": "subscribe",
    "payload": ["BTC_USD", "ETH_USD"]
  }))
});


console.log("Opening up Socket")
const socket = io('http://localhost:5050', {
    jsonp: false
});
socket.on("connect", () => {
    console.log("Socket.IO Connect")
});
socket.on('disconnect', function(reason) {
    console.log("Socket.IO Disconnect: "+reason)
});
socket.on('error', function(msg) {
    console.log("Socket.IO Error: "+msg)
});
socket.on('config', (data) => {
    config=data
    try {
        processConfig()
    } catch(e) {
        console.log("Error in processConfig: "+e.message)
    }
})  