const shareButton = document.getElementById('shareButton');
const activeShareButton = document.getElementById('activeShareButton');
const sharingOverlay = document.getElementById('sharingOverlay');
let overlayIsActive = false;


shareButton.addEventListener('click', () => {
    if (!overlayIsActive){
        sharingOverlay.style.display = 'flex';
        overlayIsActive = true;
    } else if (overlayIsActive) {
        sharingOverlay.style.display = 'none';
        overlayIsActive = false;
    }

});
activeShareButton.addEventListener('click', () => {
    if (!overlayIsActive){
        sharingOverlay.style.display = 'flex';
        overlayIsActive = true;
    } else if (overlayIsActive) {
        sharingOverlay.style.display = 'none';
        overlayIsActive = false;
    }

});

