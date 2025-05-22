document.addEventListener('DOMContentLoaded', () => {
    const photo = document.getElementById('photo');
    const audio = document.getElementById('fatrat-theme');
    const playButton = document.getElementById('playButton');

    const bpm = 127; // Beats Per Minute
    const interval = (60 / bpm) * 1000; // Calculate interval in milliseconds
    let isImageA = true; // Track which image is currently displayed
    let intervalId; // To store the ID returned by setInterval

    function switchImage() {
        if (isImageA) {
            photo.src = 'imageB.jpg'; // Switch to imageB
        } else {
            photo.src = 'imageA.jpg'; // Switch back to imageA
        }
        isImageA = !isImageA; // Toggle the image state
    }

    if (playButton) {
        playButton.addEventListener('click', () => {
            console.log('Play button clicked!');

            // Attempt to play the audio
            audio.play()
                .then(() => {
                    console.log('Audio playing successfully!');
                    playButton.style.display = 'none'; // Hide the play button
                    intervalId = setInterval(switchImage, interval); // Start switching images
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });
        });
    }

    // Stop switching images when the audio ends
    if (audio) {
        audio.addEventListener('ended', () => {
            console.log('Audio has ended. Stopping image switch.');
            clearInterval(intervalId); // Stop the image switching
            photo.src = 'imageA.jpg'; // Reset to imageA if needed
            playButton.style.display = 'block'; // Show the play button again
            isImageA = true; // Reset image state
        });
    }
});
```
