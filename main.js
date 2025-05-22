const photo = document.getElementById('photo');

// Calculate the interval in milliseconds for 127 BPM
const bpm = 127;
const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds

// Function to flip the photo
function flipPhoto() {
    photo.classList.toggle('flipped');
}

// Set an interval to flip the photo at the specified BPM
setInterval(flipPhoto, interval);
