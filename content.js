chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "request_completed") {
            // Your logic to select the GitHub radio button or any other task
            const githubRadioButton = document.getElementById('submission_method_github');
            if (githubRadioButton) {
                githubRadioButton.click();
                // If you want to simulate a click, you can do so as well
                // githubRadioButton.click();
            }
        }
    }
);
