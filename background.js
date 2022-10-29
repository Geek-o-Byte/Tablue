chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({hide: true}, ()=>{
        console.log("Textor")
    })
})

chrome.declarativeContent.onPageChanged.removeRules(undefined, ()=>{
    chrome.declarative.onPageChanged.addRules([
        
    ])
})