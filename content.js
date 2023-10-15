chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "request_completed") {
            // The logic to select the GitHub radio button
            const githubRadioButton = document.getElementById('submission_method_github');
            if (githubRadioButton) {
                githubRadioButton.click();
                // Click needed to set off correct event
            }
        }
    }
);
