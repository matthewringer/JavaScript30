// Select control elements

const player = document.querySelector('.player'); // outter player div
const video = player.querySelector('.viewer'); //video
const progressBar = player.querySelector('.progress'); //progress bar
const progressFilled = player.querySelector('.progress__filled'); //progress bar
const playButton = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = [...player.querySelectorAll('.player__button[data-skip]')];
const fullscreenBtn = player.querySelector('.player__button[name="fullscreen"]');

// Define event callbacks
function skipClicked(e) {
    video.currentTime += parseInt(e.srcElement.dataset['skip']); 
}

function rangeChange(e) {
    switch(e.srcElement.name) {
        case 'playbackRate':
            video.playbackRate = e.srcElement.value;
            break;
        case 'volume':
            video.volume = e.srcElement.value;
            break;
    }
}

function togglePlay(e) {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateProgress(e) {
    percentComplete = video.currentTime / video.duration * 100;
    progressFilled.style = `flex-basis:${percentComplete}%;`;
}

function updateButton() {
    playButton.textContent = this.paused ? '🐶' : '🚨';
}

function scrub(e) {
    video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

function fullscreen(e){
    video.controls = false;
    //video.webkitEnterFullScreen();
    console.log(video.requestFullscreen);
}

// Wire up controll callbacks
playButton.addEventListener('click', togglePlay);
ranges.forEach(r => r.addEventListener('change', rangeChange));
skipButtons.forEach(b => b.addEventListener('click',skipClicked));
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
progressBar.addEventListener('click', scrub);
fullscreenBtn.addEventListener('click', fullscreen);

/* scrubbing controlls */
let mousedown = false;
progressBar.addEventListener('mousemove', (e)=> mousedown && scrub(e) );
progressBar.addEventListener('mousedown', ()=> mousedown = true );
progressBar.addEventListener('mouseup', ()=> mousedown = false );
video.addEventListener('mouseout', ()=> mousedown = false );


// 855 504 0157 
// Pam
