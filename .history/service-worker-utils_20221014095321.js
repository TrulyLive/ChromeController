chrome.tabs.query({}, function(tabs) {
    var myTab=null;
    tabs.forEach(function (tab) {
        console.log("Found Tab")
        console.log(tab)
        if (tab.title) {
        } else {}
            chrome.tabs.remove(tab.id)
        }
    });
  });