importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()



var pubGateWs = new WebSocket("wss://localhost:5051");

pubGateWs.addEventListener("open", function() {
  pubGateWs.send(JSON.stringify({
    "time": 123456,
    "channel": "futures.tickers",
    "event": "subscribe",
    "payload": ["BTC_USD", "ETH_USD"]
  }))
});
