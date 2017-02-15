// Select control elements

const player = document.querySelector('.player'); // outter player div
const video = player.querySelector('.viewer'); //video
const progressBar = document.querySelector('.progress'); //progress bar
const progressFilled = document.querySelector('.progress__filled'); //progress bar
const playButton = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = [...document.querySelectorAll('.player__button')];

// Define event callbacks
function skipClicked(e) {

    console.log(player);
    const skip = e.srcElement.dataset['skip'];
    console.log();
}

function rangeChange(e) {
    switch(e.srcElement.name) {
        case 'playbackRate':
            video.rate = e.srcElement.value;
            break;
        case 'volume':
            video.volume = e.srcElement.value;
            break;
    }
}

function togglePlay(e) {
    video.playing = true;
}

// Wire up controll callbacks
playButton.addEventListener('click', togglePlay);
ranges.forEach(r => r.addEventListener('change', rangeChange));
skipButtons.forEach(b => b.addEventListener('click',skipClicked));

// 855 504 0157 
// Pam
