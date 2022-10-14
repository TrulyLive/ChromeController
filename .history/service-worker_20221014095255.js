importScripts('service-worker-utils.js')

console.log("Service worker is alive!")

var myTab = fixTabs()
chrome.tabs.query({}, function(tabs) {
    tabs.forEach(function (tab) {
        console.log("Found Tab")
        console.log(tab)
        if (tab.title) {
            chrome.tabs.remove(tab.id)
        }
    });
  });