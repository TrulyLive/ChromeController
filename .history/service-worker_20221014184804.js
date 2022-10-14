importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

console.log("Establishing WebSocket CLIENT")
var ws
var goto


setInterval(1)

function connect() {
    ws = new WebSocket("ws://streambox1.trulylive.com:5051");

    ws.addEventListener("open", function() {
        ws.send(JSON.stringify({
            "message": "CONNECT"
        }))
    });

    ws.addEventListener("message", function(data) {
        console.log('MESSAGE RECEIVED: '+data.data)
        console.log(data.data);
        goto=data.data
        fixTabs()
    });
        
    ws.addEventListener("close", function(e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        setTimeout(function() {
            connect();
        }, 1000);
    });
}
  



connect()



