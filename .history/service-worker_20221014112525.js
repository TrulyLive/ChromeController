importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()




const wss = new WebSocketServer({ port: 5051 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
