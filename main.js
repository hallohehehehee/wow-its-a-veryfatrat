document.addEventListener('DOMContentLoaded', () => {
    const photo = document.getElementById('photo');
    const audio = document.getElementById('robotnik-theme');
    const playButton = document.getElementById('playButton');

    const bpm = 127; // Beats Per Minute
    const interval = (60 / bpm) * 1000; // Calculate interval in milliseconds

    function flipPhoto() {
        photo.classList.toggle('flipped');
    }

    let intervalId; // To store the ID returned by setInterval

    if (playButton) { // Check if the button exists before adding listener
        playButton.addEventListener('click', () => {
            console.log('Play button clicked!'); // Debugging: Confirm click

            // Attempt to play the audio
            audio.play()
                .then(() => {
                    console.log('Audio playing successfully!');
                    // Hide the play button after successful playback
                    playButton.style.display = 'none';
                    // Start the photo flipping
                    intervalId = setInterval(flipPhoto, interval);
                })
                .catch(error => {
                    // This block runs if audio.play() fails (e.g., autoplay blocked)
                    console.error('Error playing audio:', error);
                    alert('Could not play audio automatically. Please check browser permissions or try another browser.');
                    // Optionally, still start the photo flip even if audio doesn't play
                    // intervalId = setInterval(flipPhoto, interval);
                    playButton.style.display = 'none'; // Still hide the button
                });
        });
    } else {
        console.error("Error: 'playButton' element not found in the DOM.");
    }

    // Optional: If you want to log details about the audio element on load
    // console.log("Audio element:", audio);
    // console.log("Audio source:", audio.src);
    // console.log("Audio ready state:", audio.readyState); // 0=nothing, 1=metadata, 2=current data, 3=enough data, 4=entire file
});
