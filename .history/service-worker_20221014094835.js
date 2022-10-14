importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function (tab) {
        console.log("Found Tag")
      // do whatever you want with the tab
    });
  });