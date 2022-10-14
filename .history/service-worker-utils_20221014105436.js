var myTab;

async function fixTabs() {
    console.log("Fix Tabs...")
    await chrome.tabs.query({}, function(tabs) {
        myTab=null;
        tabs.forEach(function (tab) {
            console.log("Found Tab")
            console.log(tab)
            if (tab.title) {
                if (myTab) {
                    console.log("Removing it!")
                    chrome.tabs.remove(tab.id)
                } else {
                    console.log("Using it!")
                    myTab=tab
                }
            } else {
                console.log("This tab has no title")
            }
        });
    });
    if (myTab) {
        console.log("Fix Tabs Found Tab "+myTab.title)
    } else {
        console.log("Fix tab found nothing. Creating tab.")
        myTab=chrome.tabs.create({ url: 'https://trulylive.com' }, callBackOnCreate)
    }
}

function callBackOnCreate(tab) {
    myTab=tab
}