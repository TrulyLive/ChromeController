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

function callBackOnCreate(tab) {
    myTab=tab
    goTab()
}
function goTab() {
    chrome.tabs.update(myTab.id, {url: goto,active: true}); //,state: "fullscreen"

    chrome.scripting.executeScript({
        target: {tabId: myTab.id, allFrames: true},
        files: ['content_scripts/cscript.js'],
    });
    */

    chrome.scripting.executeScript({
        target: {tabId: myTab.id, allFrames: true},
        func:fullScreen
    },callbackScript);
    
}

function callbackScript(x) {
    console.log("Callback from executing full screen script")
    console.log(x)
}