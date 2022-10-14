importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()

console.log("Opening up Socket")
const socket = io('URL', {
    jsonp: false,
});