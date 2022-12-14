
chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId)
        .then(getTab => {
            console.log("[debug]getTab:", getTab)
        })
        .catch(err => { })
})