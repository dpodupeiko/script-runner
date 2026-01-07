const mainHeading = document.getElementById('main-heading');
const changeButton = document.getElementById('change-button');

// Add an event listener to the button for the 'click' event
changeButton.addEventListener('click', function() {
    // Change the text content of the H1 element
    mainHeading.textContent = 'The text has been changed!';
});
AdaptavistBridge.request({
    url: `/rest/api/2/issue/${AdaptavistBridgeContext.context.issueKey}`,
    type: 'GET'
})
    .then(issue => {
        console.log('issue', issue)
        mainHeading.textContent = `${issue.key}:`;
    });
