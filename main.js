document.addEventListener('DOMContentLoaded', () => {
    const photo = document.getElementById('photo');
    const audio = document.getElementById('fatrat');
    const playButton = document.getElementById('playButton'); // tap button fo audio

    // balls
    // Calculate the interval in milliseconds for 127 BPM
    const bpm = 127;
    const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds

    let isFlipped = false; // backup code

    // Function to flip the photo (based on your previous script)
    function flipPhoto() {
        photo.classList.toggle('flipped');
    }
    let intervalId; 
    playButton.addEventListener('click', () => {
        // Attempt to play the audio
        audio.play()
            .then(() => {
                console.log('Audio playing successfully!');
                // Start the photo flip after the audio begins
                intervalId = setInterval(flipPhoto, interval);
                // Optionally, hide the button once playback starts
                playButton.style.display = 'none';
            })
            .catch(error => {
                console.error('Error playing audio:', error);
                // Inform the user if autoplay failed (e.g., if still an issue or if they clicked too fast)
                alert('Could not play audio. Please ensure browser allows media playback or try again.');
                // Even if audio fails, you might still want the photo to flip
                intervalId = setInterval(flipPhoto, interval);
                playButton.style.display = 'none'; // Still hide it
            });
    });
});
