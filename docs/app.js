const mainHeading = document.getElementById('main-heading');
const changeButton = document.getElementById('change-button');

// Add an event listener to the button for the 'click' event
changeButton.addEventListener('click', function() {
    // Change the text content of the H1 element
    mainHeading.textContent = 'The text has been changed!';
});
console.log("ctx",AdaptavistBridgeContext)

