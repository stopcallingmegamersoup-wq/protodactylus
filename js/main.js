// gameHub.js

// Function to open game in fullscreen
function openGameInFullscreen(gameUrl) {
    let gameModal = document.createElement('div');
    gameModal.id = 'gameModal';
    gameModal.style.position = 'fixed';
    gameModal.style.top = '0';
    gameModal.style.left = '0';
    gameModal.style.width = '100%';
    gameModal.style.height = '100%';
    gameModal.style.backgroundColor = 'black';
    gameModal.style.zIndex = '9999';

    let iframe = document.createElement('iframe');
    iframe.src = gameUrl;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    gameModal.appendChild(iframe);

    // Close button
    let closeButton = document.createElement('button');
    closeButton.innerText = 'Close Game';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.onclick = closeGame;
    gameModal.appendChild(closeButton);

    document.body.appendChild(gameModal);
}

// Function to close game modal
function closeGame() {
    let gameModal = document.getElementById('gameModal');
    if (gameModal) {
        document.body.removeChild(gameModal);
    }
}

// Function to toggle fullscreen
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}