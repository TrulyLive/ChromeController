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
    console.log("myTab is ")
    chrome.tabs.update(myTab.id, {url: data.data});
});
    
