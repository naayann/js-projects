let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

const playPause = document.getElementById("playPause");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.current;
}

function playFunc() {
    if(ctrlIcon.classList.contains("ri-play-fill")) {
        song.play();
        ctrlIcon.classList.remove("ri-play-fill");
        ctrlIcon.classList.add("ri-pause-fill");
    } else {
        song.pause();
        ctrlIcon.classList.add("ri-play-fill");
        ctrlIcon.classList.remove("ri-pause-fill");
    }
}

playPause.addEventListener("click", () => {
    playFunc();
});

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
};

progress.onchange = function() {
    song.currentTime = progress.value;
};