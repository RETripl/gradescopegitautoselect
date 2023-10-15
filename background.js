chrome.webRequest.onCompleted.addListener(
    function(details) {
        // This will run when the request to the specified URL completes

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "request_completed"});
        });

    },
    {
        urls: ["https://www.gradescope.com/courses/*/assignments/*/submissions/attempt"],
        types: ["xmlhttprequest"]
    }
);
