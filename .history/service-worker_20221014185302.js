importScripts('service-worker-utils.js')

var URL = "ws://streambox1.trulylive.com:5051"
//URL="ws://localhost:5051"

console.log("Service worker is alive!")

console.log("Establishing WebSocket CLIENT")
var ws
var goto


setInterval(ping,1000)

function ping() {
    try {
        ws.send(JSON.stringify({
            "message": "PING"
        }))
    } catch(e) {
        console.log("Ping Failed.")
    }
}

function connect() {
    ws = new WebSocket(URL);

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



