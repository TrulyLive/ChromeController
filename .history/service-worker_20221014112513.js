importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()




const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});



var pubGateWs = new WebSocket("wss://localhost:80");

pubGateWs.addEventListener("open", function() {
  pubGateWs.send(JSON.stringify({
    "time": 123456,
    "channel": "futures.tickers",
    "event": "subscribe",
    "payload": ["BTC_USD", "ETH_USD"]
  }))
});
