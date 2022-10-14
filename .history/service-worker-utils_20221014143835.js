var myTab;

async function fixTabs() {
    console.log("Fix Tabs...")
    chrome.tabs.query({}, function(tabs) {
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
                    goTab()
                }
            } else {
                console.log("This tab has no title")
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
    chrome.tabs.update(myTab.id, {url: goto,active: true,state: "fullscreen"});
    chrome.tabs.executeScript(myTab.id,{
        code: 'document.documentElement.webkitRequestFullscreen()'
        //If you had something somewhat more complex you can use an IIFE:
        //code: '(function (){return document.body.innerText;})();'
        //If your code was complex, you should store it in a
        // separate .js file, which you inject with the file: property.
    },receiveText);
    
}