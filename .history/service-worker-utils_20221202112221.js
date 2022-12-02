var myTab;

async function fixTabs() {
    console.log("Fix Tabs...")
    chrome.tabs.query({}, function(tabs) {
        myTab=null;
        tabs.forEach(function (tab) {
            console.log("Found Tab")
            console.log(tab)
            if (myTab) {
                if (tab.title!="Extensions") {
                    console.log("Removing it!")
                    chrome.tabs.remove(tab.id)
                }
            } else {
                console.log("Using it!")
                myTab=tab
                goTab()
            }
        });
        fixTabsDone();
    });
}
function fixTabsDone() {
    if (myTab) {
        console.log("Fix Tabs Found Tab "+myTab.title)
    } else {
        console.log("Fix tab found nothing. Creating tab.")
        chrome.tabs.create({ url: 'https://trulylive.com' }, callBackOnCreate)
    }
}

async function reload() {
    console.log("Reload...")
    chrome.tabs.query({}, function(tabs) {
        myTab=null;
        tabs.forEach(function (tab) {
            console.log("Found Tab")
            console.log(tab)
            if (myTab) {
                //nothing
            } else {
                console.log("Using it and reloading!")
                myTab=tab
                chrome.tabs.reload(tab.tabid);
            }
        });
    });
}

function callBackOnCreate(tab) {
    myTab=tab
    goTab()
}
function goTab() {
    console.log("goTab")

    chrome.tabs.update(myTab.id, {url: goto,active: true}); //,state: "fullscreen"

    chrome.scripting.executeScript({
        target: {tabId: myTab.id, allFrames: true},
        files: ['foreground.js'],
    });

    //chrome.scripting.executeScript({
    //    target: {tabId: myTab.id, allFrames: true},
    //    func:fullScreen
    //},callbackScript);
    
    console.log("goTab Done")
}

function callbackScript(x) {
    console.log("Callback from executing full screen script")
    console.log(x)
}