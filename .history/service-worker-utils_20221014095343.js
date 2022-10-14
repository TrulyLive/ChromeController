chrome.tabs.query({}, function(tabs) {
    var myTab=null;
    tabs.forEach(function (tab) {
        console.log("Found Tab")
        console.log(tab)
        if (tab.title) {
            if (myTab) {
                chrome.tabs.remove(tab.id)
            } else {
                myTab=tab
            }
        }
    });
  });