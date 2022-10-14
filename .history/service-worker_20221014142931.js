importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

console.log("Establishing WebSocket CLIENT")
var ws
var 

function connect() {
    ws = new WebSocket("ws://localhost:5051");

    ws.addEventListener("open", function() {
        ws.send(JSON.stringify({
            "message": "CONNECT"
        }))
    });

    ws.addEventListener("message", function(data) {
        console.log('MESSAGE RECEIVED: '+data.data)
        console.log(data.data);
        fixTabs(data.data)
        console.log("myTab is")
        console.log(myTab)
        chrome.tabs.update(myTab.id, {url: data.data});
    });
        
    ws.addEventListener("close", function() {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function() {
            connect();
        }, 1000);
    });
}
  



connect()