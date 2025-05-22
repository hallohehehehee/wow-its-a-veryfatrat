document.addEventListener('DOMContentLoaded', () => {
    const photo = document.getElementById('photo');
    const audio = document.getElementById('fatrat'); // Get the audio element

    // Calculate the interval in milliseconds for 127 BPM
    const bpm = 127;
    const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds

    // Function to balls
    function flipPhoto() {
        photo.classList.toggle('flipped');
    }

    // audio snyc
    audio.play()
        .then(() => {
            console.log('Audio playing successfully!');
            // Set an interval to flip the photo at the specified BPM
            // Start flipping AFTER the audio begins to play
            setInterval(flipPhoto, interval);
        })
        .catch(error => {
            console.error('Error playing audio:', error);
            // balls
            setInterval(flipPhoto, interval);
        });
});
