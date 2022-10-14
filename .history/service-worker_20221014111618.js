importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()

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