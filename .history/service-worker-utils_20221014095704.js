var myTab;

function fixTabs() {
    console.log("Fix Tabs...")
    chrome.tabs.query({}, function(tabs) {
        myTab=null;
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
    if (myTab) {
        console.log("Fix Tabs Found Tab "+myTab.title)
    } else {
        console.log("Fix tab found nothing. Creating tab.")
        myTab=chrome.tabs.create({ url: 'http://localhost' }, callBackOnCreate)
    }
}

function callBackOnCreate(tab) {
    myTab=tab
}