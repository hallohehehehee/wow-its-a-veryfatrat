const audio = new Audio('fatrat.mp3');
const imgA = document.getElementById('a');
const imgB = document.getElementById('b');

let isImageA = true;
const bpm = 127;
const interval = (60 / bpm) * 1000; // Convert BPM to milliseconds

audio.addEventListener('play', () => {
    const switchInterval = setInterval(() => {
        if (audio.paused) {
            clearInterval(switchInterval);
            return;
        }
        if (isImageA) {
            imgA.style.display = 'none';
            imgB.style.display = 'block';
        } else {
            imgA.style.display = 'block';
            imgB.style.display = 'none';
        }
        isImageA = !isImageA;
    }, interval);
});

audio.play();
