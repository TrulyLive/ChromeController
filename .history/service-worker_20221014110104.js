importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()

const socket = io('URL', {
    jsonp: false,
  });